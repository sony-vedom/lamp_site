import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
    userId: null,
    email: null,
    name: null,
    isAuth: false,
    // captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


//Action Creators


export const setAuthUserData = (userId, email, name, isAuth) => {
debugger
    return {
        type: SET_USER_DATA,
        payload: {userId, email, name, isAuth}
    }
}

// console.log(authReducer(initialState, setAuthUserData(1, 2, "f", true)))

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

//Thunk Creators

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.getMyLogin()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        setStatus(message)
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;