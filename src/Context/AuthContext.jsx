import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    password: "",
  });

  const globVal = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={globVal}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
