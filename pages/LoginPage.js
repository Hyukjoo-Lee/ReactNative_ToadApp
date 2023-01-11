import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebaseAuth } from "../components/config";
import Checkbox from "expo-checkbox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { theme } from "../src/theme";
import CustomText from "../components/CustomText";
import GoogleImage from "../assets/Icons/icon_Google.svg";
import FacebookImage from "../assets/Icons/icon_Facebook.svg";

const RenderGoogleSVG = (props) => {
  return <GoogleImage />;
};
const RenderFacebookSVG = (props) => {
  return <FacebookImage />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.shades.white,
  },
  // Welcome container
  container_1: {
    flex: 0.12,
    marginLeft: 13,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  imageField: {
    width: 300,
    height: 160,
    backgroundColor: "lightgray",
  },
  // Email field container
  container_2: {
    flex: 0.4,
    margin: 13,
  },
  emailText: {
    marginTop: 10,

    fontSize: 10,
    color: "#979797",
  },
  inputContainer: {
    width: "100%",
    borderColor: "black",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderWidth: 0.2,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 5,
  },
  // Authentification field container
  container_3: {
    flex: 0.55,
    margin: 13,
  },
  loginButton: {
    backgroundColor: theme.primary[700],
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  googleButton: {
    backgroundColor: theme.shades.white,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderColor: theme.primary[700],
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: theme.shades.white,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    borderColor: theme.primary[700],
    borderWidth: 1,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  authButtonText: {
    color: "black",
    fontSize: 16,
    paddingLeft: 70,
  },
  signUpTextView: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-evenly",
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Tabs");
      } else {
        console.log("user is not set");
      }
    });

    return unsubscribe;
  }, [user]);

  // Sign In function
  const handleSignIn = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log("Signed up with", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR CODE:" + errorCode + "..." + errorMessage);
      });
  };

  // Move to Signup page
  const handleSignUp = () => {
    navigation.navigate("SignUp_2");
  };

  return (
    <View style={styles.container}>
      {/* Explanation */}
      <View style={styles.container_1}>
        <CustomText style={styles.title}>Welcome back to Toad!</CustomText>
      </View>
      {/* Email field */}
      <View style={styles.container_2}>
        <CustomText style={styles.emailText}>Email</CustomText>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="abc@gmail.com"
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <CustomText style={styles.emailText}>Password</CustomText>
          <TextInput
            placeholder="At least 8 charaters "
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            // secureTextEntry
          />
        </KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "3%",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <Checkbox
              style={{ marginRight: "5%", borderColor: theme.neutral[400] }}
            />
            <CustomText style={{ color: theme.neutral[400] }}>
              Remember me
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity>
            <CustomText style={{ color: theme.shades.black }}>
              Forgot password?
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_3}>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <CustomText style={styles.loginButtonText}>Log in</CustomText>
        </TouchableOpacity>
        {/* A horizontal line with OR text*/}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#737373",
              opacity: 0.3,
            }}
          />
          <View>
            <CustomText
              style={{ width: 70, textAlign: "center", color: "#737373" }}
            >
              OR
            </CustomText>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#737373",
              opacity: 0.3,
            }}
          />
        </View>
        <TouchableOpacity style={styles.googleButton} onPress={handleSignIn}>
          <RenderGoogleSVG />
          <CustomText style={styles.authButtonText}>
            Log in with Google
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton} onPress={handleSignIn}>
          <RenderFacebookSVG />
          <CustomText style={styles.authButtonText}>
            Log in with Facebook
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpTextView} onPress={handleSignUp}>
          <CustomText style={{ color: theme.neutral[500] }}>
            You do not have an account?
          </CustomText>
          <CustomText style={{ color: theme.neutral[800] }}>Sign Up</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
