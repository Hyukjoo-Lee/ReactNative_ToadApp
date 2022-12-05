import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../components/config";

import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

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
  // // Password field container
  container_2: {
    flex: 0.6,
    //alignItems: "center",
    margin: 20,
    justifyContent: "flex-start",
  },
  title: {
    marginBottom: "1%",
    opacity: 0.6,
    fontWeight: "500",
    fontSize: 32,
  },
  passwordText: {
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
    fontStyle: "italic",
    color: "#979797",
    paddingHorizontal: 15,
    borderWidth: 0.2,
    paddingVertical: 10,
    borderRadius: 7,
    marginTop: 5,
  },

  // Empty container
  container_3: {
    flex: 0.6,
    margin: 20,
  },

  // Next Button container
  container_4: {
    flex: 0.6,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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
});

/**
 * Password Page by Jessi
 */

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const route = useRoute();
  const email = route.params.email;

  const navigation = useNavigation();

  // if there is user, go to Home screen
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Main");
      }
    });

    return unsubscribe;
  }, []);

  // Sign up function
  const handleSignUp = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          photoURL:
            // default profile image
            "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
        });
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
      <View style={styles.container_1}>
        <Image style={styles.profileImg}></Image>
      </View>

      {/* Password field container */}
      <View style={styles.container_2}>
        <Text style={styles.title}>Set your password </Text>

        <Text style={styles.passwordText}>Password</Text>

        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="At least 8 charaters "
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </KeyboardAvoidingView>
      </View>

      {/* Empty container */}
      <View style={styles.container_3}></View>

      {/* Next Button container*/}
      <View style={styles.container_4}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText} onPress={handleSignUp}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordPage;
