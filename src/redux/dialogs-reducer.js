const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    messages: [
        {id: 1, message: 'Hi?'},
        {id: 2, message: 'R u a pisya?'},
        {id: 3, message: "Nope, I'm the popa!"},
    ],
    dialogs: [
        {id: 1, name: "Vanya"},
        {id: 2, name: "Sonya"},
        {id: 3, name: "Lera"},
        {id: 4, name: "Lera"},
        {id: 5, name: "Olya"},
        {id: 6, name: "Tanya"},
        {id: 7, name: "Lena"},
        {id: 8, name: "Jenya"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, message: action.messageValue } ],
            }
        }
        default:
            return state;

    }
}

export const sendMessage = (messageValue) => {
    return {
        type: ADD_MESSAGE,
        messageValue
    }
}

export default dialogsReducer;