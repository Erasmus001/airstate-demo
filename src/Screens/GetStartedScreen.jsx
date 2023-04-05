import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GetStartedScreen = () => {
  return (
    <View style={styles.getStartedScreen}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.introTxt}>
            <Text style={styles.headTxt}>Real Estate without the hassle</Text>
            <Text style={styles.smallTxt}>
              Renting a better home does't mean spending more money.
            </Text>
          </View>
          <View style={styles.creatAccountBtnView}>
            <Pressable style={styles.creatAccountBtn}>
              <Text style={styles.creatAccountBtnTxt}>Create Account</Text>
            </Pressable>
            <View style={styles.subTxt}>
              <Text style={styles.haveAccountTxt}>
                Already have an account? Login
              </Text>
              {/* <Text style={styles.loginLink}>Login</Text> */}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  getStartedScreen: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: 50,
  },
  container: {
    width: "100%",
    height: "50%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    bottom: 0,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
  },
  introTxt: {
    width: "100%",
    marginTop: 20,
  },
  headTxt: {
    fontSize: 42,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  smallTxt: {
    fontSize: 21,
    color: "gray",
    textAlign: "center",
    marginTop: 20,
  },
  creatAccountBtnView: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 30,
  },
  creatAccountBtn: {
    width: "100%",
    backgroundColor: "black",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  creatAccountBtnTxt: {
    fontSize: 22,
    color: "white",
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subTxt: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  haveAccountTxt: {
    color: "gray",
    fontSize: 20,
    marginTop: 30,
    marginBottom: 40,
  },
  loginLink: {
    color: "dodgerblue",
    fontSize: 20,
    color: "black",
    marginTop: 30,
    marginBottom: 40,
    marginLeft: 5,
  },
});
