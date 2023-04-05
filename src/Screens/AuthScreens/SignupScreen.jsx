import React from "react";
import {
  Appearance,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupScreen = ({ isSignin, isSignup }) => {
  const [appColor, setAppColor] = React.useState(null);

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    // Use dark color scheme
    setAppColor(colorScheme);
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ width: "100%" }}>
          <Text style={styles.logo}>Roomzy</Text>
        </View>

        {/* Sign up Form */}
        <View style={styles.signupForm}>
          <View style={styles.formHead}>
            <Text style={styles.formTitle}>
              {isSignup ? "Create account" : "Sign In"}
            </Text>
          </View>

          {/* Form Groups */}
          <View style={styles.formInput}>
            <TextInput
              clearButtonMode="while-editing"
              accessibilityLabel="Email"
              autoComplete="email"
              clearTextOnFocus
              inputMode="email"
            />
          </View>
        </View>
        <Text>SignupScreen</Text>
      </SafeAreaView>
    </>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
