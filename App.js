// import { useEffect, useLayoutEffect, useState } from "react";
import AuthContextProvider, { useAuthContext } from "./src/Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./src/Navigators/AppNavigator";
import AuthNavigator from "./src/Navigators/AuthNavigator";

import { AlertNotificationRoot } from 'react-native-alert-notification';

const AppStack = createNativeStackNavigator();

const App = () => {
  const {currentUser} = useAuthContext()

  return (
    <AlertNotificationRoot>
      <AuthContextProvider>
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="splash" screenOptions={{
          animation: "slide_from_right",
        }}>
            {!currentUser ? <AppStack.Screen name="auth" component={AuthNavigator} options={{headerShown: false}}/> : <AppStack.Screen name="home" component={AppNavigator} options={{headerShown: false}}/>}
          </AppStack.Navigator>
        </NavigationContainer>
      </AuthContextProvider>
    </AlertNotificationRoot>
  );
}

export default App;