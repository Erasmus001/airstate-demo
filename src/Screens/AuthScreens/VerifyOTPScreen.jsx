import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OTP from "react-native-otp-form";

const VerifyOTPScreen = () => {
  const [otpValue, setOtpValue] = useState("");

  const valueLength = 1;

  const handleOtpChange = (value) => {
    setOtpValue(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.otpContainer}>
        {/* <OTP
          codeCount={5}
          containerStyle={{ marginTop: 50 }}
          otpStyles={{ backgroundColor: "#eee" }}
        /> */}
        {[1, 2, 3, 4].map((digit, idx) => (
          <TextInput
            key={idx}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={valueLength}
            className="otp-input"
            value={digit}
            style={styles.OtpInput}
          />
        ))}
      </View>
      <View style={styles.form}>
        <View style={styles.resetPasswordForm}>
          <View style={styles.formHead}>
            <Text style={styles.formTitle}>Reset Password</Text>
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
                placeholder="johndoe@example.com"
                placeholderTextColor="#535353"
                required
              />
            </View>

            {/* <View style={styles.formInputGroup}>
              <Text style={styles.formInputTitle}>Password</Text>
              <TextInput
                style={styles.inputBox}
                accessibilityLabel="Password"
                autoComplete="password"
                value={password}
                inputMode="text"
                onChangeText={(password) => setPassword(password)}
                maxLength={12}
                secureTextEntry={true}
                placeholder="********"
                placeholderTextColor="#535353"
                required
              />
            </View> */}
          </View>
        </View>

        {/* Form button */}
        <View style={styles.formSubmit}>
          <TouchableOpacity
            style={[styles.formSubmitBtn, emptyForm && styles.disabledBtn]}
            disabled={emptyForm && true}
            onPress={handleResetPassword}
          >
            <Text style={styles.formSubmitBtnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  otpContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    rowGap: 20,
  },
  OtpInput: {
    borderColor: "white",
    borderWidth: 1,
    height: 80,
    width: 80,
  },
  form: {
    flex: 1,
    padding: 20,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  // Form Inputs
  resetPasswordForm: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    height: "auto",
    paddingVertical: 20,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    columnGap: 30,
  },
  formHead: {
    width: "100%",
    marginBottom: 30,
    marginTop: 50,
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
  disabledBtn: {
    backgroundColor: "gray",
  },
});
