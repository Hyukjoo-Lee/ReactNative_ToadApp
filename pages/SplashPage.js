/**
 * Splash Page SignUp & Login
 */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../src/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    textDecorationColor: "none",
  },
  imageContainer: {
    paddingTop: 85,
    flex: 1.8,
    width: "100%",
    backgroundColor: "#FFFBEB",
  },
  textContainer: {
    flex: 0.28,
    // flexDirection: "column",
    // alignItems: "center",
    // textDecorationColor: "none",
  },
  title: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "3%",
    fontFamily: theme.default_font,
    fontWeight: "500",
    fontSize: 34,
    color: theme.primary[900],
  },
  description: {
    fontSize: 16,
    fontFamily: theme.default_font,
    maxWidth: "80%",
    paddingTop: "1%",
    marginLeft: "5%",
    alignSelf: "flex-start",
    color: "#555555",
  },
  btnContainer: {
    flex: 0.8,
    flexDirection: "row",
    margin: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    flex: 1,
    margin: "2.5%",
    backgroundColor: theme.shades.white,
    borderColor: theme.primary[700],
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  registerButton: {
    flex: 1,
    margin: "2.5%",
    backgroundColor: theme.primary[700],
    borderColor: theme.primary[700],
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  registerBtnText: {
    color: theme.shades.white,
    fontSize: 16,
    fontFamily: theme.default_font,
  },
  loginBtnText: {
    color: theme.shades.black,
    fontSize: 16,
    fontFamily: theme.default_font,
  },
});

export default function SplashPage() {
  const navigation = useNavigation();

  // Images in the image slider: should be replaced with others
  const images = [
    require("../assets/splash_1.png"),
    require("../assets/splash_2.png"),
    require("../assets/splash_3.png"),
  ];

  // Move to Signup page
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  // Move to Login page
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <SliderBox
          images={images}
          resizeMode="contain"
          dotColor={theme.primary[700]}
          // height 를 지정 해 주지말고.. 비율로 하는건 어떨까
          // resize mode 도 있으면 찾아보고
          // resize mode 를 위해선 어떻게 view 를 설정해야 하는지?
          inactiveDotColor={theme.primary[300]}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 15,
            marginHorizontal: 5,
            padding: 0,
          }}
          ImageComponentStyle={{
            width: "100%",
            height: "100%",
          }}
          imageLoadingColor="#2196F3"
          // autoplay
          // circleLoop
          onCurrentImagePressed={(index) =>
            // it moves to proper pages when a image is clicked
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
      {/* Text container */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text style={styles.description}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </Text>
      </View>
      {/* Button container */}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
          <Text style={styles.registerBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
