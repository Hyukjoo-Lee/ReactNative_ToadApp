import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

const AccountPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}> Profile</Text>
      <Text style={{ fontSize: 14, marginTop: 20 }}>
        Please provide an optional profile photo
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 30,
          borderRadius: 120,
          width: 120,
          height: 120,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!selectedImage ? (
          <MaterialCommunityIcons name="camera-plus" color="gray" size={45} />
        ) : (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: "100%", height: "100%", borderRadius: 120 }}
          />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Type your name"
        value={displayName}
        onChangeText={setDisplayName}
        style={{ marginTop: 40, width: "100%" }}
      />
    </View>
  );
};

export default AccountPage;
