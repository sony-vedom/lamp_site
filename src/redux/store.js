import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 10,},
                {id: 2, message: 'It\'s my first post', likesCount: 12,},
            ],
            newPostText: "пися-попа",
        },
        dialogsPage: {
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
            newMessageText: "пися-попа",
        },
        sidebar: {
            sidebarItems: [
                {item: "Profile", pathName: "profile"},
                {item: "Messages", pathName: "profile"},
                {item: "Music", pathName: "profile"},
                {item: "Settings", pathName: "profile"},
            ]

        }
    },
    _callSubscriber() {
        console.log("dfsdf")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}


window.store = store;