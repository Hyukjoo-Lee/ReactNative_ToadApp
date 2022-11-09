import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { firebaseAuth } from "../components/config";

/**
 * This page will be replaced with main page in the future.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

const HomePage = () => {
  const navigation = useNavigation();

  const handleSignout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        navigation.replace("Splash");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      {/* ? mark means email could be undefined - for the guest mode in the future */}
      <Text>Email: {firebaseAuth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
