import React from "react";
import { Appearance, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = ({ isSignin, isSignup }) => {
  const [appColor, setAppColor] = React.useState(null);

  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    // Use dark color scheme
    setAppColor(colorScheme);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: appColor }}>
      <View>
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
        <View></View>
      </View>
      <Text>SignupScreen</Text>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
