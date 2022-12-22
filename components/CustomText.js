import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../src/theme";

export default function CustomText(props) {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: 15,
    fontFamily: theme.default_font,
  },
});
