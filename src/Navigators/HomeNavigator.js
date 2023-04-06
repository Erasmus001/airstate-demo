import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ListingDetailsScreen from "../Screens/ListingDetailsScreen";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
      <HomeStack.Navigator initialRouteName="home">
        <HomeStack.Screen name="home" component={HomeScreen} />
        <HomeStack.Screen name="listingDetails" component={ListingDetailsScreen} />
      </HomeStack.Navigator>
  );
};

export default HomeNavigator;
