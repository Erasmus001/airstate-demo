import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

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
  const [status, setStatus] = useState("");

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  // * Authentication Methods from Firebase...

  const signupWithGoogle = async () => {
    return {};
  };

  const logout = async () => {
    return signOut().catch((error) => {
      console.log(error);
    });
  };

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setCurrentUser(user);
      setStatus("Account successfully created");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
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
      console.log(user);
      setCurrentUser(user);
      setStatus("Account successfully created");
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
    status,
    setCurrentUser,
    signupWithGoogle,
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
