import React from "react"
import {Formik} from "formik"
import {connect} from "react-redux"
import {login} from "../../redux/auth-reducer"
import * as Yup from 'yup'
import style from "../common/FormControls/FormControls.module.css"
import styles from "./Login.module.css"
import {MyInput} from "../common/FormControls/FormControls"
import {onSubmitLogin} from "../../firebase";


const Login = (props) => {
    // if (props.isAuth) {
    //     return <Navigate to={`/profile/${props.userId}`}/>
    // }


    const schema = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    })

    return <>
        <h1>Login</h1>

        <Formik initialValues={{text: ""}}
                onSubmit={(formData, actions) => {
                    setTimeout(onSubmitLogin, 0);
                }}>
            {formik => <form onSubmit={formik.handleSubmit} className={styles["login-form"]}>
                <MyInput label={"вход в гугл"} placeholder={"text"}
                         name="text" type="text" errorComponent={"span"}/>
                <button type="submit">add</button>
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

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})

export default connect(mapStateToProps, {login})(Login);