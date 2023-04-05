import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingWrapper = ({ children, next, prev, currentIndex }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        {children}
        <View style={styles.bottomButtons}>
          {currentIndex < 1 ? (
            <TouchableOpacity
              onPress={next}
              style={[currentIndex < 1 ? styles.fullButton : styles.button]}
            >
              <Text style={{ color: "white" }}>Next</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity onPress={prev} style={styles.button}>
                <Text style={{ color: "white" }}>Prev</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={next} style={styles.button}>
                <Text style={{ color: "white" }}>Next</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  bottomButtons: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: 210,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "100%",
    borderWidth: 1,
    borderColor: "white",
  },
  fullButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: "100%",
    borderWidth: 1,
    borderColor: "white",
  },
});
