import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
    minHeight: "42px",
    marginTop: "39px",
  },
});

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>Welcome to Toad</Text>
        <Text>
          simply dummy text of the printing and typesetting indudddsstry. Lorem
          Ipsum
        </Text>
      </View>
    </View>
  );
};

export default SplashPage;
