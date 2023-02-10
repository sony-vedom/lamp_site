import React, {useState} from "react";
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/image/user.png"
import wallpaper from "../../../assets/image/wallpaper.jpg"
import {ProfileData, ProfileDataForm} from "./ProfileData";
import {Formik} from "formik";


const ProfileInfo = ({profile, status, isOwner, updateStatus, savePhoto, saveProfile}) => {
    const [isEditMode, setEditMode] = useState(false);
    if (!profile) return <Preloader/>
    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0])
        }
    }
    const onSubmit = async (formData, {setStatus, setFieldError}) => {
        try {
            await saveProfile(formData, setStatus)
            setEditMode(false)
        } catch (errors) {
            const InvalidFormNames =
                (errors.map(er => ((er)[30].toLowerCase()) + (Array.from(er).slice(31, -1)).join("")))
                    .map(key => `contacts.${key}`)
            InvalidFormNames.forEach(name => setFieldError(name, "Invalid url format"))
        }
    }


    return (
        <div className={styles.info}>
            <section className={styles.bigImage}>
                <img className={styles.cover} src={wallpaper} alt="wallpaper"/>
            </section>
            <section className={styles.descriptionBlock}>
                <div className={styles.avatarArea}>
                    {!isOwner
                        ? <div className={styles.avatarContainer}>
                            <img src={profile.photos.small || userPhoto} className={styles.avatar} alt="avatar"/></div>
                        : <Formik initialValues={{avatar: ""}}>
                            {formik => (<div>
                                    <label htmlFor="avatar">
                                        <div className={styles.avatarContainer}>
                                            <div
                                                style={{backgroundImage: 'url(' + profile.photos.large || userPhoto + ')'}}
                                                className={styles.avatarButton}>
                                                <div className={styles.hoverBlock}>Change my avatar {"\n"} (click
                                                    here)
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                    <input id="avatar" name="avatar" type="file" onChange={onMainPhotoSelected}
                                           value={formik.values.avatar} className="fileInput"/>
                                </div>
                            )}
                        </Formik>}
                    <div className={styles.profileName}>{profile.fullName}</div>
                </div>
                <div className={styles.informationArea}>
                    <ProfileStatus updateStatus={updateStatus} status={status} isOwner={isOwner}/>
                    {!isEditMode
                        ? <ProfileData profile={profile} onEditMode={() => (setEditMode(true))} isOwner={isOwner}/>
                        : <ProfileDataForm profile={profile} onSubmit={onSubmit} isOwner={isOwner}/>}
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo;