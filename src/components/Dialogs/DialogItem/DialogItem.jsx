import React from "react";
import styles from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "dialog/" + props.id;
    DialogItem.checkedLink = () => {
        return (
            navdata => navdata.isActive ? styles.active : styles.name
        )
    }
    return (
        <div className={styles.dialogItem}>
            <NavLink to={path} className={DialogItem.checkedLink()}>
                <img src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png" alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;