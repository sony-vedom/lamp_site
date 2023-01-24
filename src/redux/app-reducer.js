import {getAuthUserData} from "./auth-reducer"

const SET_INITIALIZED = "SET_INITIALIZED";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default
        : {
            return state;
        }
    }
}

//Action Creators

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//Thunk Creators

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then((response) => {
            dispatch(initializedSuccess())
        }

        // конкретно этот диспач возвращает промис // Promise.all() нужен на всякий случай, вдруг ещё промисы появятся
    )
}

export default appReducer;