import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FirstOnboarding = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: "white", fontSize: 26 }}>
        First Onboarding Screen
      </Text>
    </View>
  );
};

export default FirstOnboarding;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
