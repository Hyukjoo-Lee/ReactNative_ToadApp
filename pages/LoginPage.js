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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Profile image container
  container_1: {
    flex: 0.3,
    justifyContent: "center",
  },
  title: {
    margin: 20,
    fontWeight: "500",
    fontSize: 24,
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
    margin: 10,
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
  loginButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  loginButtonText: {
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
  loginButtonText: {
    color: "black",
    fontSize: 16,
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

  return (
    <View style={styles.container}>
      {/* Profile image container */}
      <View style={styles.container_1}></View>
      {/* Explanation */}
      <View style={styles.container_2}>
        <Text style={styles.title}>Welcome back to Toad!</Text>
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
          <Text style={styles.emailText}>Password</Text>
          <TextInput
            placeholder="At least 8 charaters "
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            // secureTextEntry
          />
        </KeyboardAvoidingView>
        <View style={styles.container_3}>
          <Checkbox />
          <Text>Remember me</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
          <Text style={styles.loginButtonText}>Log in</Text>
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
    </View>
  );
};

export default LoginPage;
