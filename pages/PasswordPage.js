import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../components/config";

import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "../src/theme";
import CustomText from "../components/CustomText";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.shades.white,
  },
  // Set password text container
  container_1: {
    flex: 0.12,
    marginLeft: 13,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  // Password field container
  container_2: {
    flex: 0.4,
    margin: 13,
  },
  passwordText: {
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
  // Next Button container
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
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
});

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const route = useRoute();
  const email = route.params.email;

  const navigation = useNavigation();

  // if there is user, go to Home screen
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Main", {
          keyWord: "",
        });
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
      {/* Explanation */}
      <View style={styles.container_1}>
        <CustomText style={styles.title}>Set your password</CustomText>
      </View>
      {/* Password field */}
      <View style={styles.container_2}>
        <CustomText style={styles.passwordText}>Password</CustomText>
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
      {/* Next Button container*/}
      <View style={styles.container_3}>
        <TouchableOpacity style={styles.nextButton} onPress={handleSignUp}>
          <CustomText style={styles.nextButtonText}>Next</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage;
