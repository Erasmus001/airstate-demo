import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstOnboarding = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{ color: "black", fontSize: 24 }}>FirstOnboarding</Text>
    </View>
  );
};

export default FirstOnboarding;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
