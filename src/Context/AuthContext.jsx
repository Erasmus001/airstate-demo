import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const AuthContext = createContext({
  currentUser: null,
  logout: () => Promise,
  register: () => Promise,
  signIn: () => Promise,
  resetPassword: () => Promise,
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  // * Authentication Methods from Firebase...

  const logout = async () => {
    return signOut().catch((error) => {
      console.log(error);
    });
  };

  const register = async (email, password, fullname) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      userCredential.user.displayName = fullname;
      setCurrentUser(user);

      if (
        !errorCode == "auth/email-already-exists" ||
        !errorCode == "auth/invalid-password" ||
        !errorCode == "auth/user-not-found"
      ) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Success",
          textBody: "Signup successful",
        });
      }
    } catch (error) {
      const errorCode = error.code;

      //* Check if email is already in use....
      if (errorCode == "auth/email-already-exists") {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: "The provided email is already in use by an existing user.",
        });
      }

      if (errorCode == "auth/invalid-password") {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody:
            "Passwords must be a string with at least six characters, a number and a symbol.",
        });
      }

      if (errorCode == "auth/user-not-found") {
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "Failed",
          textBody: "User with provided details not found, please sign up",
        });
      }
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Signed in
      const user = userCredential.user;
      console.log(status, JSON.stringify(user));
      setCurrentUser(user);

      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: `Welcome, ${userCredential.user.displayName}`,
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    }
  };

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(email);
      console.log("Password reset email sent!");
    } catch (error) {
      setError(error);
    }
  };

  const globVal = {
    currentUser,
    setCurrentUser,
    // signupWithGoogle,
    register,
    signIn,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={globVal}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
