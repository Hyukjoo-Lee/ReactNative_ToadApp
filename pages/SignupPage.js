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
  // What is your email container
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
  nextButton: {
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
  nextButtonText: {
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
  signInTextView: {
    flexDirection: "row",
    marginTop: 32,
    justifyContent: "space-evenly",
  },
});

const SignUpPage = () => {
  const [email, setEmail] = useState("");

  // const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  // GoogleSignin.configure({
  //   webClientId:
  //     "138508252713-26j1f45n8lj8blb212pkntvhsf2mj00h.apps.googleusercontent.com",
  // });

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // Sign up function
  const handleSignUp = () => {
    navigation.navigate("Password", {
      email: email,
    });
  };

  // Move to Login page
  const handleSignIn = () => {
    navigation.navigate("Login");
  };

  // const onGoogleButtonPress = async () => {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   const user_sign_in = auth().signInWithCredential(googleCredential);
  //   user_sign_in
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleGoogleSignout = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await auth().signOut();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        {/* Explanation */}
        <View style={styles.container_1}>
          <CustomText style={styles.title}>
            What's your email address?
          </CustomText>
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
          </KeyboardAvoidingView>
        </View>
        <View style={styles.container_3}>
          <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
            <CustomText style={styles.nextButtonText}>Next</CustomText>
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
          <TouchableOpacity style={styles.googleButton} onPress={handleSignUp}>
            <RenderGoogleSVG />
            <CustomText style={styles.authButtonText}>
              Register with Google
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.facebookButton}
            onPress={handleSignUp}
          >
            <RenderFacebookSVG />
            <CustomText style={styles.authButtonText}>
              Register with Facebook
            </CustomText>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.signInTextView}onPress={onGoogleButtonPress}> */}
          <TouchableOpacity
            style={styles.signInTextView}
            onPress={handleSignIn}
          >
            <CustomText style={{ color: theme.neutral[500] }}>
              Do you already have an account?
            </CustomText>
            <CustomText style={{ color: theme.neutral[800] }}>
              Sign In
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // if google login is successful, return account name
  // return (
  //   <View style={styles.container}>
  //     <View style={{ marginTop: 100, alignItems: "center" }}>
  //       <Text style={{ fontSize: 28, fontWeight: "bold" }}>
  //         Welcome {user.displayName}
  //       </Text>
  //       <TouchableOpacity
  //         style={styles.googleButton}
  //         onPress={handleGoogleSignout}
  //       >
  //         <Text style={styles.authButtonText}>Google Sign out</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
};

export default SignUpPage;
