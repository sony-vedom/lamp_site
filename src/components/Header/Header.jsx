import React from "react";
import styles from './Header.module.css';
import {Navigate, NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import lampIcon from "../../assets/image/lampIcon.png"
import authentication from "../../firebaseUtils/authentication";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer"
import {logout} from "../../redux/auth-reducer";


const Header = (props) => {
    const logout = () => {
        return authentication.mySingOut()
            .then(() => {
                props.setAuthUserData("", "", "", false)
            }
        )
    }
    return (
        <header className={styles.header}>
            <a className={styles.logo}>
                <div>
                    <img src={lampIcon} alt="logo"/>
                </div>
                <h1>Lamp Site</h1>
            </a>
            <Navbar userId={(props.userId) ? props.userId : null}/>
            <div className={styles.LoginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={logout}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {setAuthUserData})(Header);