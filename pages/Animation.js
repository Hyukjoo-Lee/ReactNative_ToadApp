import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
} from "react-native";

export default function AnimationApp() {
  const [animationValue] = useState(new Animated.Value(0));
  const ref = useRef(null);

  const startAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const returnAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    transform: [
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 100],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          width: 395,
          height: 296,
        }}
        resizeMode="cover"
        source={require("../assets/firstSplash.jpg")}
      >
        <Animated.View style={animatedStyles} ref={ref}>
          <Animated.Image source={require("../assets/Ellipse_6.jpg")} />
          <Animated.Image source={require("../assets/Ellipse_7.jpg")} />
          <Animated.Image source={require("../assets/Ellipse_8.jpg")} />
          <Animated.Image source={require("../assets/Ellipse_9.jpg")} />
          <Animated.Image source={require("../assets/Ellipse_10.jpg")} />
        </Animated.View>
      </ImageBackground>

      <Text onPress={startAnimation}>Start Animation</Text>
      <Text onPress={returnAnimation}>Reset Animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 395,
    height: 296,
  },
  box: {
    width: 300,
    height: 300,
    backgroundImage: "url(/path/to/image.jpg)",
    backgroundColor: "red",
  },
});
