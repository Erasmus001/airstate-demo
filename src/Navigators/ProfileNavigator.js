import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../Screens/ProfileScreen";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
      <ProfileStack.Navigator>
        {/* <ProfileStack.Screen name="home" component={HomeScreen} /> */}
        <ProfileStack.Screen name="user" component={ProfileScreen} />
      </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
