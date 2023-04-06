import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <AppStack.Navigator>
        <AppStack.Screen name="home" component={HomeScreen} />
      </AppStack.Navigator>
  );
};

export default AppNavigator;
