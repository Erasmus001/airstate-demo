import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SearchStack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
      <SearchStack.Navigator>
        {/* <SearchStack.Screen name="home" component={HomeScreen} /> */}
        <SearchStack.Screen name="listingDetails" component={ListingDetailsScreen} />
      </SearchStack.Navigator>
  );
};

export default SearchNavigator;
