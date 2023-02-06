import React from "react"
import styles from './Post/MyPostsForm.module.css'
import {Form, Formik} from "formik";
import {MyButton, MyTextarea} from "../../common/FormControls/FormControls";
import {ReactComponent as ClipIcon} from "../../../assets/image/clip.svg";
import * as Yup from "yup";

const MyPostsForm = (props) => {
    const schema = Yup.object({
        newPostText: Yup.string().max(30, 'Must be 30 characters or less')
            .min(5, 'Must be 5 characters or more')
            .required('Required')
    })
    return <Formik
        initialValues={{newPostText: "", newPostFile: ""}}
        onSubmit={(postData, actions) => {
            setTimeout(() => {
                props.addPost(postData.newPostText);
                actions.resetForm()
            }, 0)
        }}
        validationSchema={schema}
    >
        {formik => (<Form className={styles.newPost}>
            <MyTextarea name="newPostText" errorComponent={"div"} errorStyle={styles.error} placeholder="Type your post"/>
            <label className={styles.clipButton}>
                <ClipIcon/>
                <input type="file" id="newPostFile" name="newPostFile" className="fileInput"/>
            </label>
            <MyButton buttonStyle={styles.button} name="newPostText"
                      buttonText={"Add post"} {...props}></MyButton>
        </Form>)}
    </Formik>
}

export default MyPostsForm;