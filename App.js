// import { useEffect, useLayoutEffect, useState } from "react";
import { useAuthContext } from "./src/Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/Context/AppContext";
import AppNavigator from "./src/Navigators/AppNavigator";
import AuthNavigator from "./src/Navigators/AuthNavigator";

const AppStack = createNativeStackNavigator();

const App = () => {
  const {currentUser} = useAuthContext()

  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="splash" screenOptions={{
        animation: "slide_from_right",
      }}>
          {/* <AppStack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} /> */}
          {!currentUser ? <AppStack.Screen name="auth" component={AuthNavigator} options={{headerShown: false}}/> : <AppStack.Screen name="home" component={AppNavigator} options={{headerShown: false}}/>}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;