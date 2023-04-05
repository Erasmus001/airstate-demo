import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SecondOnboarding = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: "white", fontSize: 26 }}>
        Second Onboarding Screen
      </Text>
    </View>
  );
};

export default SecondOnboarding;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
