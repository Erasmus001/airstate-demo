import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {auth, app}