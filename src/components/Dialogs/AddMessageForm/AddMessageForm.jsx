import React from "react";
import styles from "../Dialogs.module.css";
import {Form, Formik} from "formik"
import * as Yup from 'yup'
import {MyButton, MyTextarea} from "../../common/FormControls/FormControls";


const AddMessageForm = (props) => {
    const schema = Yup.object({
        newMessageText: Yup.string().required('Required').max(100, 'Must be 100 characters or less')
    })
    return <>
        <Formik
            initialValues={{newMessageText: ""}}
            onSubmit={(messageData, actions) => {
                setTimeout(() => {
                    props.sendMessage(messageData.newMessageText)
                    actions.resetForm()
                    }, 0)
            }}
            validationSchema={schema}
        >
            {formik => (<Form className={styles.newMessage}>
                <MyTextarea name="newMessageText" errorComponent={"div"} placeholder="Type your message"/>
                <MyButton buttonStyle={styles.button}
                          name="newMessageText" buttonText={"Add message"} {...props}></MyButton>
            </Form>)}
        </Formik>
        </>
}

export default AddMessageForm;