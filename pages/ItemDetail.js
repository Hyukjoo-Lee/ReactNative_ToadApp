import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimennsions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { theme } from "../src/theme";

const ItemDetail = () => {
  const route = useRoute();
  const item = route.params?.item;
  const navigation = useNavigation();

  //alert(item.name);

  return (
    <View style={styles.container}>
      <Image style={styles.itemImage} source={item.image} />
      <View style={styles.infoView}>
        <View style={styles.userInfoView}>
          <Image style={styles.userPhoto} source={item.userImg} />
          <View style={styles.userIDnArea}>
            <Text style={styles.userID}>{item.userId}</Text>
            <Text style={styles.userArea}>{item.area}</Text>
          </View>
          {/* <View style={styles.userPoint}> */}
          <Text style={styles.userPoint}>{item.userPoint} point(s)</Text>
          {/* </View> */}
        </View>
        <View
          style={{
            top: 5,
            height: 2,
            backgroundColor: "grey",
            opacity: 0.3,
            marginTop: 5,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <View style={styles.itemDetailView}>
          <Text style={styles.itemStatus}>{item.status}</Text>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemNumViews}>{item.views} view(s)</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemCondition}>Condition : {item.condition}</Text>
          <Text style={styles.itemAges}>Ages : {item.ages}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#ddd",
  },
  infoView: {
    flex: 1,
  },
  userInfoView: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  userPhoto: {
    borderRadius: 25,
  },
  userIDnArea: {
    flex: 1,
    marginTop: 10,
    marginLeft: 20,
  },
  userID: {
    fontFamily: theme.default_font,
    fontWeight: "medium",
    fontSize: 20,
  },
  userArea: {
    fontFamily: theme.default_font,
    fontWeight: "medium",
    fontSize: 15,
    color: "#999",
  },
  userPoint: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: "medium",
    fontSize: 15,
    fontFamily: theme.default_font,
    textDecorationLine: "underline",
  },
  itemDetailView: {
    margin: 20,
  },
  itemTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: theme.default_font,
  },
  itemStatus: {
    fontFamily: theme.default_font,
    fontWeight: "medium",
    color: "#54BFB2",
  },
  itemNumViews: {
    marginTop: 5,
    marginBottom: 5,
    fontFamily: theme.default_font,
    color: "#999",
  },
  itemDescription: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: theme.default_font,
    fontSize: 19,
    color: "#555",
  },
  itemCondition: {
    fontFamily: theme.default_font,
    fontSize: 15,
    marginBottom: 10,
  },
  itemAges: {
    fontFamily: theme.default_font,
    fontSize: 15,
  },
});

export default ItemDetail;
