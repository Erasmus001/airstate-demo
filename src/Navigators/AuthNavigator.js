import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../Screens/AuthScreens/SigninScreen";
import SignupScreen from "../Screens/AuthScreens/SignupScreen";
import RecoverEmail from "../Screens/AuthScreens/RecoverEmailScreen";
import VerifyEmailScreen from "../Screens/AuthScreens/VerifyEmailScreen";
import VerifyOTPScreen from "../Screens/AuthScreens/VerifyOTPScreen";
import ResetPasswordScreen from "../Screens/AuthScreens/ResetPasswordScreen";
// import AuthScreen from "../Components/Auth";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <AuthStack.Navigator initialRouteName="signin" screenOptions={{
        animation: "slide_from_right",
        headerShown: false
      }}>
        {/* <AuthStack.Screen name="mainAuth" component={AuthScreen} /> */}
        <AuthStack.Screen name="signin" component={SigninScreen} />
        <AuthStack.Screen name="signup" component={SignupScreen} />
        <AuthStack.Screen name="recoverEmail" component={RecoverEmail} />
        <AuthStack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
        <AuthStack.Screen name="VerifyOTP" component={VerifyOTPScreen} />
        <AuthStack.Screen name="resetPassword" component={ResetPasswordScreen} />
      </AuthStack.Navigator>
  );
};

export default AuthNavigator;
