import { useEffect, useLayoutEffect, useState } from "react";
import { useAuthContext } from "./src/Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppContextProvider from "./src/Context/AppContext";
import AppNavigator from "./src/Navigators/AppNavigator";
import AuthNavigator from "./src/Navigators/AuthNavigator";
import SplashScreen from "./src/Screens/SplashScreen";

const AppStack = createNativeStackNavigator();

const App = () => {
  const {currentUser} = useAuthContext()
  const [isAppReady, setIsAppReady] = useState(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsAppReady(true)
    }, 3000)
  })

  useEffect(() => {
    if (isAppReady) {
      return <SplashScreen />
    }
  }, [])

  return (
    <AppContextProvider>
      <NavigationContainer>
        <AppStack.Navigator initialRouteName="splash">
          {/* <AppStack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} /> */}
          {!currentUser ? <AppStack.Screen name="auth" component={AuthNavigator} /> : <AppStack.Screen name="home" component={AppNavigator} />}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default App;