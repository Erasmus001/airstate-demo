// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
//* https://firebase.google.com/docs/web/setup#available-libraries

//* Your web app's Firebase configuration
//* For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDCcLj9MTfjROyON-ivvAWZCbZK6qiben4",
  authDomain: "airstate-demo.firebaseapp.com",
  projectId: "airstate-demo",
  storageBucket: "airstate-demo.appspot.com",
  messagingSenderId: "447408184715",
  appId: "1:447408184715:web:dd45619c9aaac64fb9238e",
  measurementId: "G-ZKC6VDWZZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, app, analytics}