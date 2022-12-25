/**
 * Splash Page SignUp & Login
 */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import AccountImage from "../assets/Icons/icon_account_box.svg";
import { theme } from "../src/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    textDecorationColor: "none",
  },
  title: {
    marginBottom: "3%",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "5%",
    fontFamily: theme.default_font,
    fontWeight: "500",
    fontSize: 36,
    color: theme.primary[900],
  },
  description: {
    fontSize: 16,
    fontFamily: theme.default_font,
    minheight: "4%",
    marginBottom: "3%",
    alignSelf: "flex-start",
    marginLeft: "5%",
    color: theme.shades.black,
  },
  imageContainer: {
    // image size should be edited
    width: "100%",
    marginTop: 40,
  },
  btnContainer: {
    flexDirection: "row",
    width: "96%",
  },
  loginButton: {
    flex: 1,
    margin: 10,
    backgroundColor: theme.shades.white,
    borderColor: theme.primary[700],
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  registerButton: {
    flex: 1,
    margin: 10,
    backgroundColor: theme.primary[700],
    borderColor: theme.primary[700],
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
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

  const RenderAccountSVG = (props) => {
    return <AccountImage style={{}} />;
  };

  // Images in the image slider: should be replaced with others
  const images = [
    RenderAccountSVG,
    RenderAccountSVG,
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
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
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <SliderBox
            images={images}
            dotColor="#000000"
            inactiveDotColor="#737373"
            dotStyle={{
              width: 12,
              height: 12,
              borderRadius: 15,
              marginHorizontal: 5,
              padding: 0,
            }}
            ImageComponentStyle={{
              width: "100%",
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
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text style={styles.description}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSignUp}
          >
            <Text style={styles.registerBtnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
