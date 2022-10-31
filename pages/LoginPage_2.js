// import { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

// what is this..?
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { CheckBox } from "react-native-web";


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Profile image container
  container_1: {
    flex: 0.3,
    justifyContent: "center",
    //add by Jessi
    marginTop: 30,
  },
  profileImg: {
    width: "16%",
    height: "70%",
    margin: 10,
    backgroundColor: "lightgray",
  },
  // Explanation container
  container_2: {
    //modify by Jessi
    flex: 0.3,
    // flex: 1,
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
    //modify by Jessi
    flex: 1.5,
    // flex: 0.6,
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
    //add by Jessi
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    fontStyle: "italic",
    paddingHorizontal: 15,
    borderWidth: 0.2,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 5,
  },
  passwordText: {
    marginLeft: 10,
    fontSize: 10,
    color: "#979797",
  },
  logInButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    //modify by Jessi
    marginTop: 100,
    // marginTop: 15,
  },
  logInButtonText: {
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
  logInButtonText: {
    color: "black",
    fontSize: 16,
  },
});

/**
 * Login Page
 */
 const LoginPage_2 = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigation = useNavigation();

//   // if there is user, go to Home screen
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         navigation.navigate("Home");
//       }
//     });

//     return unsubscribe;
//   }, []);

//   // Sign up function
  // const handleSignUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log("Signed up with", user.email);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("ERROR CODE:" + errorCode + "..." + errorMessage);
  //     });
  // };

//   // Log in function
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in with", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR CODE:" + errorCode + "..." + errorMessage);
      });
  };


  return (

    <View style={styles.container}>

      {/* Profile image container */}
      <View style={styles.container_1}>
        <Image style={styles.profileImg}></Image>
      </View>

      {/* Explanation */}
      <View style={styles.container_2}>
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text style={styles.description}>
          simply dummy text of the printing
        </Text>
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


        {/* Password field */}
        <Text style={styles.passwordText}>Password</Text>

        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="Your password"
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
        </KeyboardAvoidingView>

        {/* Remember me & Forgot password */}
        <TextInput> Remember me </TextInput>
        <TextInput> Forgot password? </TextInput>


        {/* Log In button */}
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logInButtonText} onPress={handleLogin}>
            Log In
          </Text>
        </TouchableOpacity>

        {/* A horizontal line with OR text*/}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            // marginTop: 10,
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
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.authButtonText} onPress={handleLogin}>
            Log in with your Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.authButtonText} onPress={handleLogin}>
            Log in with your Facebook
          </Text>
        </TouchableOpacity>
      </View>

  </View>

    // original source by Jaydon
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

    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity onPress={handleLogin} style={styles.button}>
    //       <Text style={styles.buttonText}>Login</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       onPress={handleSignUp}
    //       style={[styles.button, styles.buttonOutline]}
    //     >
    //       <Text style={styles.buttonOutlineText}>Register</Text>
    //     </TouchableOpacity>
    //   </View>
    // </KeyboardAvoidingView>


  );
};

export default LoginPage_2;
