import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Profile image container
  container_1: {
    flex: 0.3,
    justifyContent: "center",
  },
  profileImg: {
    width: "16%",
    height: "70%",
    margin: 10,
    backgroundColor: "lightgray",
  },
  // Explanation container
  container_2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    marginBottom: "1%",
    opacity: 0.6,
    fontWeight: "500",
    fontSize: 32,
  },
  description: {
    opacity: 0.6,
    fontSize: 16,
    width: "75%",
    minheight: "4%",
    textAlign: "center",
    marginBottom: "5.5%",
  },
  imageField: {
    width: 300,
    height: 160,
    backgroundColor: "lightgray",
  },
  // Email field container
  container_3: {
    flex: 0.6,
    margin: 20,
  },
  emailText: {
    marginLeft: 10,
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
  nextButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  nextButtonText: {
    color: "black",
    fontSize: 16,
  },
  // Authentification field container
  container_4: {
    flex: 0.9,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  authButtonText: {
    color: "black",
    fontSize: 16,
  },
  nextButtonText: {
    color: "black",
    fontSize: 16,
  },
});

/**
 * Signup Page
 */
const SignUpPage = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  GoogleSignin.configure({
    webClientId:
      "138508252713-26j1f45n8lj8blb212pkntvhsf2mj00h.apps.googleusercontent.com",
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.container}>
        {/* Profile image container */}
        <View style={styles.container_1}>
          <Image style={styles.profileImg}></Image>
        </View>
        {/* Explanation */}
        <View style={styles.container_2}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.description}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </Text>
          {/* Profile Image View */}
          <View style={styles.imageField} />
        </View>
        {/* Email field */}
        <View style={styles.container_3}>
          <Text style={styles.emailText}>Email</Text>
          <KeyboardAvoidingView style={styles.inputContainer}>
            <TextInput
              placeholder="abc@gmail.com"
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
            <Text style={styles.nextButtonText}>Next</Text>
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
                backgroundColor: "black",
                opacity: 0.3,
              }}
            />
            <View>
              <Text style={{ width: 70, textAlign: "center", color: "black" }}>
                OR
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "black",
                opacity: 0.3,
              }}
            />
          </View>
        </View>
        {/* Authentification field */}
        <View style={styles.container_4}>
          <GoogleSigninButton
            style={styles.googleButton}
            onPress={onGoogleButtonPress}
          />
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.authButtonText} onPress={handleSignUp}>
              Sign up with your Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebookButton}>
            <Text style={styles.authButtonText} onPress={handleSignUp}>
              Sign up with your Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    // <KeyboardAvoidingView style={styles.container} behavior="padding">
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Email"
    //       value={email}
    //       onChangeText={(text) => setEmail(text)}
    //       style={styles.input}
    //     />
    //     <TextInput
    //       placeholder="Password"
    //       value={password}
    //       onChangeText={(text) => setPassword(text)}
    //       style={styles.input}
    //       secureTextEntry
    //     />
    //   </View>
    // </KeyboardAvoidingView>
  }
  // if google login is successful, return account name
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          Welcome {user.displayName}
        </Text>
      </View>
    </View>
  );
};

export default SignUpPage;
