import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ThirdOnboarding = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: "white", fontSize: 26 }}>
        Third Onboarding Screen
      </Text>
    </View>
  );
};

export default ThirdOnboarding;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
