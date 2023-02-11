import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, signInWithRedirect} from "firebase/auth";
import {getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCdSrPaDIKTID2j4gI9cOnGCmTfDN27-pM",
    authDomain: "lamp-site-da041.firebaseapp.com",
    projectId: "lamp-site-da041",
    storageBucket: "lamp-site-da041.appspot.com",
    messagingSenderId: "913733888403",
    appId: "1:913733888403:web:fe528d6aca8b700ac02066",
    measurementId: "G-2FYTSB3WFT"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const onSubmitLogin = (e) => {
    signInWithRedirect(auth, provider).then(result => console.log(result));

    // getRedirectResult(auth).then((result) => {
    //     // // This gives you a Google Access Token. You can use it to access Google APIs.
    //     // const credential = GoogleAuthProvider.credentialFromResult(result);
    //     // const token = credential.accessToken;
    //     //
    //     // // The signed-in user info.
    //     const user = result.user;
    //     console.log(user)
    //     // // IdP data available using getAdditionalUserInfo(result)
    //     // // ...
    //
    //     console.log(result)
    }).catch((error) => {
        // // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...

        console.log(error)
    });
}


export default app;