import React, {useState} from "react";
import {ErrorMessage, useField} from "formik";
import style from "./FormControls.module.css";

export const MyInput = ({label, className, errorComponent, ...props}) => {
    const [field] = useField(props)
    return (
        <div>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <input className={className} {...field} {...props}/>
            <ErrorMessage name={props.name} component={errorComponent} className={style["total-error"]}/>
        </div>
    );
}

export const MyTextarea = ({label, className, errorComponent, totalClassName, errorStyle, ...props}) => {
    const [field, meta] = useField(props);
    const [isOnBlur, setIsOnBlur] = useState(true)
    return (
        <>
            {label && <label htmlFor={props.id || props.name}>{label}</label>}
            <textarea onBlurCapture={() => setIsOnBlur(true)}
                      onFocus={() => setIsOnBlur(false)} className={className} {...field} {...props}/>
            {!isOnBlur || meta.error !== "Required" ? (
                <div className={style["total-error"] + " " + errorStyle}>{meta.error}</div>
            ) : null}
        </>
    );
}

export const MyButton = ({buttonStyle, buttonText, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className={buttonStyle}>
            <button type="submit" disabled={!!meta.error || !!!field.value}>Add post</button>
        </div>
    );
}