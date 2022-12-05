import React, {
  useEffect,
  useCallback,
  useState,
  useLayoutEffect,
} from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Avatar } from "@rneui/base";
import { GiftedChat } from "react-native-gifted-chat";
import { firebaseAuth, db } from "../components/config";
import AlarmImage from "../assets/Icons/Icon_Alarm.svg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  container_2: {
    flex: 1,
    backgroundColor: "green",
  },
});

const RenderAlarmSVG = (props) => {
  return <AlarmImage style={{ stroke: props.color, marginTop: 6.5 }} />;
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
          <RenderAlarmSVG />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Seller",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Seller",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        style={styles.container_2}
        messages={messages}
        showAvatarForEveryMessage={true}
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
