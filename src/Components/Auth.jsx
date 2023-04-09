import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../Context/AuthContext";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const AuthScreen = ({ isSignin, isSignup }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [emptyForm, setEmptyForm] = React.useState(true);

  const { register, signIn } = useAuthContext();

  const navigation = useNavigation();

  // * Sign up
  const createAccountWithEmail = () => {
    register(email, password, fullname);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Signup successful",
    });

    navigation.navigate("index", {
      screen: "home",
    });
    setEmail("");
    setEmptyForm(true);
    setFullname("");
    setPassword("");
  };

  // * Login
  const signInWithEmail = () => {
    signIn(email, password);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Signin successful",
    });

    navigation.navigate("index", {
      screen: "home",
    });
    setEmail("");
    setEmptyForm(true);
    setPassword("");
  };

  useEffect(() => {
    if (!email || (isSignup && !fullname) || !password) {
      setEmptyForm(true);
    } else {
      setEmptyForm(false);
    }
  }, [emptyForm, email, fullname, password]);

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={styles.form}>
          {/* Sign up Form */}
          <View style={styles.signupForm}>
            <View style={styles.formHead}>
              <Text style={styles.formTitle}>
                {isSignup ? "Create account" : "Sign In"}
              </Text>
            </View>

            {/* Form Groups */}
            <View style={styles.formInput}>
              {isSignup && (
                <View style={styles.formInputGroup}>
                  <Text style={styles.formInputTitle}>Full name</Text>
                  <TextInput
                    style={styles.inputBox}
                    accessibilityLabel="Fullname"
                    autoComplete="name"
                    inputMode="text"
                    value={fullname}
                    onChangeText={(name) => setFullname(name)}
                    placeholder="John Doe"
                    placeholderTextColor="#535353"
                    required
                  />
                </View>
              )}
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

              <View style={styles.formInputGroup}>
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
              </View>
              {isSignin && (
                <View style={styles.forgotPassword}>
                  <Text
                    style={styles.forgotPasswordLink}
                    onPress={() => navigation.navigate("resetPassword")}
                  >
                    Forgot password?
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Form button */}
          <View style={styles.formSubmit}>
            <TouchableOpacity
              style={[styles.formSubmitBtn, emptyForm && styles.disabledBtn]}
              disabled={emptyForm && true}
              onPress={isSignin ? signInWithEmail : createAccountWithEmail}
            >
              <Text style={styles.formSubmitBtnTxt}>
                {isSignin ? "Login" : "Create account"}
              </Text>
            </TouchableOpacity>
            <View style={styles.subTxt}>
              <Text style={styles.haveAnAcc}>
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </Text>
              <Text
                style={styles.login}
                onPress={() =>
                  isSignin
                    ? navigation.navigate("signup")
                    : navigation.navigate("signin")
                }
              >
                {isSignup ? "Sign in" : "Sign up"}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  logo: {
    fontSize: 24,
    color: "#CFCFCF",
    marginTop: 40,
  },

  // Form Inputs
  signupForm: {
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
  subTxt: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    rowGap: 10,
    marginTop: 30,
  },
  haveAnAcc: {
    fontSize: 20,
    color: "#BDBDBD",
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
