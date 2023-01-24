import React from "react";
import {Form, Formik} from "formik"
import {MyInput, MyTextarea} from "../../common/FormControls/FormControls";
import style from "../../common/FormControls/FormControls.module.css";

const ProfileForm = ({profile, isOwner, onSubmit}) => {
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
            {profileKeys.map((key, index) => <MyInput name={formNames[index]} key={key} label={key} errorComponent={"span"}/>)}
            {isOwner && <button type="submit" disabled={!formik.isValid}>Save</button>}
        </Form>)}
    </Formik>
}

export default ProfileForm;
