import React, {useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/image/user.png"
import wallpaper from "../../../assets/image/wallpaper.jpg"
import ProfileForm from "./ProfileDataForm";
import {setStatus} from "../../../redux/profile-reducer";


const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
    const [isEditMode, setEditMode] = useState(false);

    if (!profile) return <Preloader/>

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData, actions) => {
        setTimeout(() => {
            saveProfile(formData, actions.setStatus).then(() => {
                setEditMode(false)
            }).catch((errors) => {
                const InvalidFormNames =
                        (errors.map(er => ((er)[30].toLowerCase()) + (Array.from(er).slice(31, -1)).join("")))
                        .map(key => `contacts.${key}`)
                InvalidFormNames.forEach(name => actions.setFieldError(name, "Invalid url format"))
            })
        }, 0)
    }

    return (
        <div className={styles.info}>
            <div className={styles.bigImage}>
                <img className={styles.cover}
                     src={wallpaper}/>
            </div>
            <section className={styles.descriptionBlock}>
                <div className={styles.mainProfileArea}>
                    <div className={styles.avatarContainer}>
                        <img src={profile.photos.large || userPhoto} className={styles.avatar}/>
                    </div>
                    <div>
                        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                <div className={styles.informationArea}>
                    <ProfileStatus updateStatus={updateStatus} status={status} isOwner={isOwner}/>
                    {!isEditMode
                        ? <ProfileData profile={profile} onEditMode={() => (setEditMode(true))} isOwner={isOwner}/>
                        : <ProfileForm profile={profile} onSubmit={onSubmit} isOwner={isOwner}/>}
                </div>
            </section>
        </div>
    )
}

const ProfileData = ({profile, isOwner, onEditMode}) => {
    return <div>
        {isOwner && <button onClick={onEditMode}>Редактировать</button>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>

        {profile.lookingForAJob && <div>
            <b>My professionals skills</b>: {profile.lookingForAJobDescription}
        </div>
        }

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key}
                                                                                contactValue={profile.contacts[key]}/>)}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contacts}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;