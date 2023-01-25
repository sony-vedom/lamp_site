import React from "react";
import {Form, Formik} from "formik"
import {MyInput, MyTextarea} from "../../common/FormControls/FormControls";
import styles from "./ProfileInfo.module.css";

export const ProfileData = ({profile, isOwner, onEditMode}) => {
    return <div>

        {isOwner && <button onClick={onEditMode}>Редактировать</button>}

        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>

        {profile.lookingForAJob && <div>
            <b>My professionals skills</b>: {profile.lookingForAJobDescription}</div>}

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts)
            .map(key => <div className={styles.contacts}><b>{key}</b>: {profile.contacts[key]}</div>)}
        </div>

    </div>
}

export const ProfileDataForm = ({profile, isOwner, onSubmit}) => {
    const profileKeys = Object.keys(profile.contacts);
    const formNames = profileKeys.map(key => `contacts.${key}`)
    return <Formik
        initialValues={{...profile, contacts: {...profile.contacts}}}
        onSubmit={onSubmit}
        initialStatus="">
        {formik => (<Form>
            <MyInput name="fullName" label={"Full name"} placeholder={"Type your name"}/>
            <MyInput name="lookingForAJob" label={"Looking for a job"} type={"checkbox"}/>
            <MyTextarea name="lookingForAJobDescription" label={"My professionals skills"}/>
            <MyTextarea name="aboutMe" label={"About me"}/>
            <div>Contacts:</div>
            {profileKeys.map((key, index) => <MyInput name={formNames[index]} key={key} label={key}
                                                      errorComponent={"span"}/>)}
            {isOwner && <button type="submit" disabled={!formik.isValid}>Save</button>}
        </Form>)}
    </Formik>
}

