import React, { createContext, useContext } from "react";
import AuthContextProvider from "./AuthContext";

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={null}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
