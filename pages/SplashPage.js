import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

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
    fontWeight: "500",
    fontSize: 36,
  },
  description: {
    opacity: 0.6,
    fontSize: 16,
    width: "60%",
    minheight: "4%",
    textAlign: "center",
    marginBottom: "5.5%",
  },
  imageContainer: {
    // image size should be edited
    width: "100%",
    marginTop: 40,
  },
  btnContainer: {
    flexDirection: "row",
    width: "90%",
  },
  button: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderColor: "#D9D9D9",
    borderWidth: 1,
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
    require("../assets/splash.png"),
    "https://s3-alpha-sig.figma.com/img/fd28/4105/8db3722e6692831a4589945742169c60?Expires=1668988800&Signature=NiohfsssYH6a5NUT~LNsyY~ys--KnTVC-evLiNR7FDepIrCATlHpXxjuEutDWeYcB1gOYzNY7aEuI0XhwDJEWOwsgfcHvsxF5bdM7Kmg~DpH68YkeQs6FjjU~9HWrnZP8BhIORFqEgL81DIEK0QxkcbKzNwpHyYtd-Hjo1KeWIjTCmOqvyeErb48LaT~sYHuhAT2fmbdmAsfBCc-SIvVJMkxEYHA5PTXcPuuMrP8VcnG12w-ED~B5jFlznTYUEdTwOl6Q2wPsLC1OArOSFsEqCf6lS33hSfXQXh5CRmzkayLzwjnazylnPbIBAZUp6HWEhXPhHElMhV0Uz~MCq7y8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text style={styles.description}>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum
        </Text>
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
              width: "86%",
            }}
            imageLoadingColor="#2196F3"
            autoplay
            circleLoop
            onCurrentImagePressed={(index) =>
              // it moves to proper pages when a image is clicked
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashPage;
