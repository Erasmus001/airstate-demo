import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
              <Text style={[styles.buttonTxt, styles.fullButtonTxt]}>
                Get started
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.btn}>
              <TouchableOpacity onPress={prev} style={styles.button}>
                <Text style={styles.buttonTxt}>Prev</Text>
              </TouchableOpacity>
              {currentIndex >= 2 ? (
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Done");
                  }}
                  onLongPress={() => {
                    Alert.alert("You just long pressed...");
                  }}
                  style={styles.button}
                >
                  <Text style={styles.buttonTxt}>Done</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={next} style={styles.button}>
                  <Text style={styles.buttonTxt}>Next</Text>
                </TouchableOpacity>
              )}
            </View>
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
    backgroundColor: "white",
    height: "100%",
    borderRadius: 5,
  },
  fullButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    borderRadius: 8,
  },
  fullButtonTxt: {
    color: "black",
    fontSize: 24,
    fontWeight: "500",
  },
  buttonTxt: {
    color: "black",
    fontSize: 22,
  },
  btn: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    rowGap: 20,
  },
});
