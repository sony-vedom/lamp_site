import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div>
                    <img src="https://www.pngmart.com/files/1/Light-Bulb-PNG-Transparent-Image.png"/>
                </div>
                <h1>Lamp Site</h1>
            </div>

            <Navbar/>
            <div className={styles.LoginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;