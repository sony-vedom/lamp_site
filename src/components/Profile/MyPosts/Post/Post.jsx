import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
                <img src="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"/>
            </div>
            <p className={classes.message}>
                {props.message}
            </p>
            <div className={classes.likes}>
                like {props.count}
            </div>
        </div>
    )
}

export default Post;