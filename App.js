import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import SplashScreen from "./src/Screens/SplashScreen";
// import OnboardingScreen from "./src/Screens/OnboardingScreen";
import { useAuthContext } from "./src/Context/AuthContext";
// import GetStartedScreen from "./src/Screens/GetStartedScreen";
import SignupScreen from "./src/Screens/AuthScreens/SignupScreen";
import SigninScreen from "./src/Screens/AuthScreens/SigninScreen";
import AuthScreen from "./src/Components/Auth";
import RecoverEmail from "./src/Screens/AuthScreens/RecoverEmailScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/Context/AppContext";
import AppNavigator from "./src/Navigators/AppNavigator";
import AuthNavigator from "./src/Navigators/AuthNavigator";
import { useEffect, useState } from "react";
import SplashScreen from "./src/Screens/SplashScreen";

const AppStack = createNativeStackNavigator();

export default function App() {
  const {currentUser} = useAuthContext()
  const [isAppReady, _setIsAppReady] = useState(false)

  useEffect(() => {
    if (isAppReady) {
      return <SplashScreen />
    }
  }, [])

  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppStack.Navigator>
          {/* <AppStack.Screen */}
          {!currentUser ? <AppStack.Screen name="auth" component={AuthNavigator} /> : <AppStack.Screen name="home" component={AppNavigator} />}
        </AppStack.Navigator>
      </NavigationContainer>

      {/* <View style={styles.container}> */}
      {/* <StatusBar style="light" /> */}
      {/* <SplashScreen /> */}
      {/* <OnboardingScreen /> */}
      {/* <GetStartedScreen /> */}
      {/* <SignupScreen /> */}
      {/* <SigninScreen /> */}
      {/* <AuthScreen isSignup /> */}
      {/* <RecoverEmail /> */}
      {/* </View> */}
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/* *




*/
