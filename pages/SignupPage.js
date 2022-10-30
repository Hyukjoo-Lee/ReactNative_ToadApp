import { useState } from "react";
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
const SingUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.warn("jump to password");
  };

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
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText} onPress={handleSignUp}>
            Next
          </Text>
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
};

export default SingUpPage;