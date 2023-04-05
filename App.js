import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import SplashScreen from "./src/Screens/SplashScreen";
// import OnboardingScreen from "./src/Screens/OnboardingScreen";
import AuthContextProvider from "./src/Context/AuthContext";
// import GetStartedScreen from "./src/Screens/GetStartedScreen";
import SignupScreen from "./src/Screens/AuthScreens/SignupScreen";
import SigninScreen from "./src/Screens/AuthScreens/SigninScreen";
import AuthScreen from "./src/Components/Auth";
import RecoverEmail from "./src/Screens/AuthScreens/RecoverEmail";

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* <SplashScreen /> */}
        {/* <OnboardingScreen /> */}
        {/* <GetStartedScreen /> */}
        {/* <SignupScreen /> */}
        {/* <SigninScreen /> */}
        {/* <AuthScreen isSignup /> */}
        <RecoverEmail />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
