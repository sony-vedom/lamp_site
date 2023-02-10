import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/image/user.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    debugger
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.avatar} alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Больше не ржачькать вместе(</button>

                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Ржачькать вместе))</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div> {user.name} </div>
                    <div> {user.status} </div>
                </span>
                <span>
                    <div> {"user.location.country"} </div>
                    <div> {"user.location.city"} </div>
                </span>
            </span>
        </div>
    )
}

export default User;