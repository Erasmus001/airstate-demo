import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import BookmarkNavigator from "./BookmarkNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
      <Tab.Navigator initialRouteName="index">
        <Tab.Screen name="index" component={HomeNavigator} />
        <Tab.Screen name="search" component={SearchNavigator} />
        <Tab.Screen name="bookmark" component={BookmarkNavigator} />
        <Tab.Screen name="profile" component={ProfileNavigator} />
      </Tab.Navigator>
  );
};

export default AppNavigator;
