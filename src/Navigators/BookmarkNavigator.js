import { createNativeStackNavigator } from "@react-navigation/native-stack";

const BookmarkStack = createNativeStackNavigator();

const BookmarkNavigator = () => {
  return (
      <BookmarkStack.Navigator>
        {/* <BookmarkStack.Screen name="home" component={HomeScreen} /> */}
        <BookmarkStack.Screen name="listingDetails" component={ListingDetailsScreen} />
      </BookmarkStack.Navigator>
  );
};

export default BookmarkNavigator;
