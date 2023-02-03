import React from "react";
import styles from './Post.module.css';
import crossIcon from "../../../../assets/image/cross.png"

const Post = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"/>
            </div>
            <p className={styles.message}>
                {props.message}
            </p>
            <div>
                <img className={styles.crossIcon} src={crossIcon}/>
            </div>
            <div className={styles.likes}>
                like {props.count}
            </div>
        </div>
    )
}

export default Post;