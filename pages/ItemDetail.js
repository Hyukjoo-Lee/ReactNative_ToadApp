import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Dimennsions} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {SearchBar} from 'react-native-elements';
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
                    <Image style={styles.userPhoto} source={item.userImg}/>
                    <View style={styles.userIDnArea}>
                        <Text style={styles.userID}>{item.userId}</Text>
                        <Text>{item.area}</Text>
                    </View>
                    {/* <View style={styles.userPoint}> */}
                        <Text style={styles.userPoint}>{item.userPoint} points</Text>
                    {/* </View> */}
                </View>
                <View style={{
                    top: 5,
                    height: 2,
                    backgroundColor: "grey",
                    opacity: 0.3,                
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                }}
                />
                <View style={styles.itemDetailView}>
                    <Text>{item.status}</Text>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text>{item.views}</Text>
                    <Text>{item.description}</Text>
                    <Text>Condition {item.condition}</Text>
                    <Text>Ages {item.ages}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
      },
    itemImage: {
        flex:1,
        width: "100%",
        height: "100%",
        backgroundColor: "#ddd",
      },
    infoView:{
        flex:1,
    },
    userInfoView:{
        // flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
    },
    userPhoto:{
        borderRadius: 25,
    },
    userIDnArea : {
        flex: 1,
        marginTop: 10,
        marginLeft: 20,
        fontFamily: theme.default_font,
    },
    userID:{
        fontFamily: theme.default_font,
        fontWeight: "medium",
        fontSize: 20,
    },
    userPoint: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,
        fontWeight: "medium",
        fontSize: 15,
        fontFamily: theme.default_font,
    },
    itemDetailView:{
        margin:20,
    },
    itemTitle: {
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: theme.default_font,
    },
});

export default ItemDetail;