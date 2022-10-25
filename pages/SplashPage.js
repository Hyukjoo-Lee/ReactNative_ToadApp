import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    border: "1px none",
    alignItems: "center",
    textDecorationColor: "none",
  },
  title: {
    marginBottom: "3%",
    opacity: "0.6",
    fontWeight: "500",
    fontSize: "36px",
  },
  description: {
    opacity: "0.6",
    fontSize: "16px",
    width: "75%",
    minheight: "4%",
    textAlign: "center",
    marginBottom: "5.5%",
  },
  imageContainer: {
    // image size should be edited
    width: "100%",
  },

  button: {
    backgroundColor: "lightgray",
    width: "85%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
  },
});

const SplashPage = () => {
  const navigation = useNavigation();

  // Images in the image slider: should be replaced with others
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ];

  // Move to Signup page
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  // Move to Login page
  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text style={styles.description}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </Text>
        <View style={styles.imageContainer}>
          <SliderBox
            images={images}
            onCurrentImagePressed={(index) =>
              // it moves to proper pages when a image is clicked
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleSignUp}>
            Create new account
          </Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>
          Do you have an accout?{" "}
          <TouchableOpacity>
            <Text onPress={handleLogin} style={{ fontWeight: "bold" }}>
              Log In
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SplashPage;
