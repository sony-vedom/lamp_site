import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={styles.message}>
            <img src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"/>
            {props.message}
        </div>
    )
}


export default Message;