import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

export default app;