import React, {useEffect, useState} from "react";
import styles from './Post.module.css';
import {ReactComponent as CrossIcon} from "../../../../assets/image/cross.svg"
import userPhoto from "../../../../assets/image/user.png"
import {ReactComponent as LikesIcon} from "../../../../assets/image/heart.svg";
import {ReactComponent as ReplyIcon} from "../../../../assets/image/reply.svg";

const Post = (props) => {
    const [isClick, setClick] = useState(false)
    const [likesCount, setLikesCount] = useState(props.count)
    useEffect(() => {
        props.updateLikesCount(likesCount, props.id)
    }, [likesCount])
    return (
        <div className={styles.item}>
            <div className={styles.avatar}>
                <img src={userPhoto} alt="avatar"/>
            </div>
            <p className={styles.message}>
                {props.message}
            </p>
            <button className={styles.crossButton}>
                <CrossIcon/>
            </button>
            <section className={styles.actionArea}>
            <div className={styles.likes} style={isClick ? {color: "#f44336"} : null}>
                <button onClick={() => {
                    isClick ? setClick(false) : setClick(true);
                    (!isClick)
                        ? setLikesCount((prevCount) => {
                            return +prevCount + 1
                        })
                        : setLikesCount((prevCount) => {
                            return +prevCount - 1
                        })
                }} className={styles.likesIconContainer}>
                    <LikesIcon/>
                </button>
                {likesCount}
            </div>
            <label className={styles.replyArea}>
                <input type="button" value={"Reply"} className={styles.replyButton}/>
                <ReplyIcon/>
            </label>
            </section>
        </div>
    )
}

export default Post;