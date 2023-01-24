import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
                <NavLink to="/profile" className={navData => navData.isActive ? styles.active : styles.item}>Profile</NavLink>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? styles.active : styles.item}>Messages</NavLink>
                <NavLink to="/users"
                         className={navData => navData.isActive ? styles.active : styles.item}>Users</NavLink>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? styles.active : styles.item}>Settings</NavLink>
        </nav>
    )
}

export default Navbar;