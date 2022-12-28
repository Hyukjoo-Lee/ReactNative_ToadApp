import React, { useCallback, useState, useLayoutEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Svg } from "react-native-svg";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { Avatar } from "@rneui/base";
import { GiftedChat } from "react-native-gifted-chat";
import { firebaseAuth, db } from "../components/config";
import AlarmImage from "../assets/Icons/icon_Alarm.svg";
import FilterImage from "../assets/Icons/icon_Filter.svg";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 105,
  },
});

export const RenderAlarmSVG = (props) => {
  return (
    <AlarmImage style={{ stroke: props.color, marginTop: props.marginTop }} />
  );
};

export const RenderFilterSVG = (props) => {
  return (
    <FilterImage style={{ stroke: props.color, marginTop: props.marginTop }} />
  );
};

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: firebaseAuth?.currentUser?.photoURL,
            }}
          />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 15,
            marginBottom: 5,
          }}
        >
          <RenderAlarmSVG marginTop="6.5%" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, "chats"), { _id, createdAt, text, user });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        messagesContainerStyle={{
          backgroundColor: "#fff",
        }}
        textInputStyle={{
          backgroundColor: "#fff",
          borderRadius: 20,
        }}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: firebaseAuth?.currentUser?.email,
          name: firebaseAuth?.currentUser?.displayName,
          avatar: firebaseAuth?.currentUser?.photoURL,
        }}
      />
    </View>
  );
};

export default Chat;
