import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect, signOut} from "firebase/auth";
import app from "../firebase";

const authentication = {
    auth: getAuth(app),
    provider: new GoogleAuthProvider(),
    onSubmitLogin() {
        return async () => {
            await signInWithRedirect(this.auth, this.provider);
        }
    },
    getRedirectGoogleResult() {
        return async () => {
            let result = await getRedirectResult(this.auth)
            if (result) {
                GoogleAuthProvider.credentialFromResult(result)
            }
        }
    },
    mySingOut() {
        return signOut(this.auth);
    }
}


export default authentication;