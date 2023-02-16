import React, {useEffect} from "react"
import {Formik} from "formik"
import {connect} from "react-redux"
import {setAuthUserData} from "../../redux/auth-reducer"
import * as Yup from 'yup'
import styles from "./Login.module.css"
import {MyInput} from "../common/FormControls/FormControls"
import authentication from "../../firebaseUtils/authentication";
import {Navigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";


const Login = (props) => {

    const schema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    onAuthStateChanged(authentication.auth, (user) => {

        if (user) {
            props.setAuthUserData(user.uid, user.email, user.displayName, true)
        }
    })

    if (props.userId) {
        return <Navigate to={`/profile/${props.userId}`}/>
    }

    return <>
        <h1>Login</h1>

        <Formik initialValues={{text: ""}}
                onSubmit={authentication.onSubmitLogin()}>
            {formik => <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
                <MyInput value="Sing with google" placeholder={"text"}
                         name="text" type="submit" errorComponent={"span"}/>
            </form>}
        </Formik>
        {/*<Formik*/}
        {/*    initialValues={{email: "", password: "", rememberMe: "", captcha: ""}}*/}
        {/*    onSubmit={(formData, actions) => {*/}
        {/*        setTimeout(() => {*/}
        {/*            // props.login(formData.email, formData.password, !!formData.rememberMe, formData.captcha, actions.setStatus)*/}
        {/*            actions.resetForm()*/}
        {/*        }, 0);*/}
        {/*    }}*/}
        {/*    validationSchema={schema}>*/}
        {/*    {formik => (*/}
        {/*        <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>*/}
        {/*            <div className={styles["text-input-area"]}>*/}
        {/*                <MyInput label={"Email"} placeholder={"12345@gmail.com"} className={styles["text-input"]}*/}
        {/*                         name="email" type="text" errorComponent={"span"}/>*/}
        {/*            </div>*/}

        {/*            <div className={styles["text-input-area"]}>*/}
        {/*                <MyInput label={"Password"} placeholder={"••••••••••••"}*/}
        {/*                         className={styles["text-input"]} name="password" type="password"*/}
        {/*                         errorComponent={"span"}/>*/}
        {/*            </div>*/}

        {/*            <div className={styles["rememberMe-area"]}>*/}
        {/*                <MyInput label={"Remember me"} name="rememberMe" type={"checkbox"}/>*/}
        {/*            </div>*/}

        {/*            {props.captchaUrl && <img src={props.captchaUrl} alt={"Captcha"}/>}*/}
        {/*            {props.captchaUrl && <div>*/}
        {/*                <MyInput name="captcha" type={"text"} placeholder={"Please enter Image Code"}/></div>}*/}

        {/*            {formik.status ? <div className={style["total-error"]}>{formik.status}</div> : null}*/}

        {/*            <button type="submit" disabled={!formik.isValid}>Submit</button>*/}
        {/*        </form>*/}
        {/*    )}*/}
        {/*</Formik>*/}
    </>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(Login);