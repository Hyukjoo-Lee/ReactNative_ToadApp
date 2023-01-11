import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, firebaseAuth } from "../components/config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { theme } from "../src/theme";
import CustomText from "../components/CustomText";
import { doc, setDoc } from "@firebase/firestore";
import { askForPermission, pickImage, uploadImage } from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.shades.white,
  },
  // Set password text container
  container_1: {
    flex: 0.12,
    marginLeft: 13,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
  // Password field container
  container_2: {
    flex: 0.4,
    margin: 13,
  },
  InfoText: {
    marginTop: 10,
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
  // Next Button container
  container_3: {
    flex: 0.55,
    margin: 13,
  },
  nextButton: {
    backgroundColor: theme.primary[700],
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
});

const SignUpPage_2 = () => {
  const route = useRoute();
  const email = route.params.email;
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

  const navigation = useNavigation();

  // if there is user, go to Home screen
  useEffect(() => {
    (async () => {
      const status = await askForPermission();
      setPermissionStatus(status);
    })();
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      // if (user) {
      //   navigation.navigate("Main", {
      //     keyWord: "",
      //   });
      // }
    });
    return unsubscribe;
  }, []);

  // Sign up function
  const SignUpPage_2 = () => {
    // to store photo url
    let photoURL;

    if (!displayName || !password) {
      alert("Please type fiil out the field");
    }
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (selectedImage) {
          const { url } = uploadImage(
            selectedImage,
            `images/${user.uid}`,
            "profilePicture"
          );
          photoURL = url;
          alert("selected image is ", selectedImage, "photoURL ㅑㄴ");
        } else {
          // default profile
          photoURL =
            "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x";
        }

        // user data
        const userData = {
          displayName,
          email: user.email,
        };

        if (photoURL) {
          userData.photoURL = photoURL;
        }

        updateProfile(user, userData);
        setDoc(doc(db, "users", user.uid), { ...userData, uid: user.uid }),
          console.log("Signed up with", user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn("ERROR CODE:" + errorCode + "..." + errorMessage);
      });

    navigation.navigate("Login", {
      keyWord: "",
    });
  };

  // Image Picker
  async function handleProfilePicture() {
    const result = await pickImage();
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }

  if (!permissionStatus) {
    return (
      <View>
        <CustomText>Loading</CustomText>
      </View>
    );
  }

  // Checking permission
  if (permissionStatus !== "granted") {
    return (
      <View>
        <CustomText>You need to allow this permission</CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Explanation */}
      <View style={styles.container_1}>
        <CustomText style={styles.title}>Set your Information</CustomText>
      </View>
      {/* Password field */}
      <View style={styles.container_2}>
        <CustomText style={styles.InfoText}>NickName</CustomText>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="Type your display name"
            onChangeText={(text) => setDisplayName(text)}
            style={styles.input}
          />
        </KeyboardAvoidingView>
        <CustomText style={styles.InfoText}>Password</CustomText>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <TextInput
            placeholder="At least 8 charaters "
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </KeyboardAvoidingView>
        <CustomText style={styles.InfoText}>Photo (optional)</CustomText>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: 20,
          }}
        >
          <TouchableOpacity
            onPress={handleProfilePicture}
            style={{
              marginTop: 30,
              borderRadius: 120,
              width: 120,
              height: 120,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!selectedImage ? (
              <MaterialCommunityIcons name="camera-plus" size={45} />
            ) : (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: "100%", height: "100%", borderRadius: 120 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Next Button container*/}
      <View style={styles.container_3}>
        <TouchableOpacity style={styles.nextButton} onPress={SignUpPage_2}>
          <CustomText style={styles.nextButtonText}>Next</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPage_2;
