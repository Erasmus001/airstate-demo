import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthScreen from "../../Components/Auth";

const SigninScreen = () => {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <AuthScreen isSignin />
      </SafeAreaView>
    </>
  );
};

export default SigninScreen;
