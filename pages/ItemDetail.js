import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Dimennsions} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {SearchBar} from 'react-native-elements';


const ItemDetail = () => {

    const route = useRoute();
    const item = route.params?.item;
    const navigation = useNavigation();

    //alert(item.name);

    return (
        <View style={styles.container}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.infoView}></View>
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
    }
});

export default ItemDetail;