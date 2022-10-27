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
      flex: "0.3",
      borderWidth: "1",
      borderColor: "black",
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
      flex: "1",
      borderWidth: "1",
      borderColor: "black",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    title: {
      marginBottom: "1%",
      opacity: "0.6",
      fontWeight: "500",
      fontSize: 32,
    },
  
    // Email field container
    container_3: {
      flex: "0.6",
      borderWidth: "1",
      borderColor: "black",
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
  });

/**
 * Password Page by Jessi
 */

const PasswordPage = () => {

    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSignUp = () => {
      console.warn("jump to password");
    };

    return ( 
    // <View>
    //     <Text>Welcome to Password Page</Text>
    // </View>

    <View style={styles.container}>
        
        {/* Profile image container */}
        <View style={styles.container_1}>
            <Image style={styles.profileImg}></Image>
        </View>

        {/* Explanation */}
        <View style={styles.container_2}>
            <Text style={styles.title}>Set your password</Text>
        </View>

        {/* Password field */}
        <View style={styles.container_3}>
            <Text style={styles.emailText}>Password</Text>
        
            <KeyboardAvoidingView style={styles.inputContainer}>
                <TextInput
                    placeholder="At least 8 charaters "
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                />
            </KeyboardAvoidingView>
            
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