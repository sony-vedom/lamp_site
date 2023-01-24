import React, {useEffect, useState} from "react";
import styles from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    const [isEditMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(() => { // имитация работы ComponentDidUpdate
        setStatus(props.status)
    }, [props.status])

    return (
        <div>
            {props.isOwner && !isEditMode && <div>
                    <b>Status:</b> <span onDoubleClick={() => {
                    setEditMode(true)
                }}>{props.status || "No status"}</span>
                </div>
            }

            {props.isOwner && isEditMode &&  <div>
                    <input autoFocus={true}
                           onChange={(e) => setStatus(e.target.value)}
                           onBlur={() => {
                               setEditMode(false);
                               props.updateStatus(status)
                           }}
                           value={status}/>
                </div>
            }

            {!props.isOwner && <span><b>Status:</b> {props.status || "No status"}</span>}
        </div>
    )
}

export default ProfileStatus;