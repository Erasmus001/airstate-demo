import React, { useEffect } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RecoverEmail = () => {
  const [email, setEmail] = React.useState("");
  const [emptyForm, setEmptyForm] = React.useState(true);

  useEffect(() => {
    if (!email) {
      setEmptyForm(true);
    } else {
      setEmptyForm(false);
    }
  }, [emptyForm, email]);

  const handleEmailRecovery = () => console.log({ email });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={styles.container}>
        <View style={styles.recoverEmailForm}>
          <View style={styles.formHead}>
            <Text style={styles.formTitle}>Recover Email</Text>
          </View>

          {/* Form Groups */}
          <View style={styles.formInput}>
            <View style={styles.formInputGroup}>
              <Text style={styles.formInputTitle}>Email address</Text>
              <TextInput
                style={styles.inputBox}
                accessibilityLabel="Email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder="Enter recovery email"
                placeholderTextColor="#535353"
              />
            </View>
            <View style={styles.formSubmit}>
              <TouchableOpacity
                style={[styles.formSubmitBtn, emptyForm && styles.disabledBtn]}
                disabled={emptyForm && true}
                onPress={handleEmailRecovery}
              >
                <Text style={styles.formSubmitBtnTxt}>Recover email</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecoverEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  // Form Inputs
  recoverEmailForm: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    height: "auto",
    paddingVertical: 20,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  formHead: {
    width: "100%",
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 42,
    color: "white",
    fontWeight: "700",
  },
  formInput: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    columnGap: 10,
  },
  formInputGroup: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    columnGap: 14,
    marginBottom: 15,
  },
  formInputTitle: {
    fontSize: 20,
    color: "#818181",
    marginBottom: 15,
  },
  inputBox: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "hsla(0,0%,23%,0.32)",
    backgroundColor: "#1616164F",
    width: "100%",
    height: 55,
    borderRadius: 5,
    color: "#CFCFCF",
    fontSize: 20,
    paddingHorizontal: 15,
  },
  forgotPassword: {
    width: "100%",
    marginTop: 10,
  },
  forgotPasswordLink: {
    color: "#757575",
    fontSize: 20,
  },

  // Form Button
  formSubmit: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    columnGap: 10,
  },
  formSubmitBtn: {
    width: "100%",
    backgroundColor: "white",
    height: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  formSubmitBtnTxt: {
    fontSize: 22,
    fontWeight: "600",
  },
  login: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
  },
  disabledBtn: {
    backgroundColor: "gray",
  },
});
