import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const itemdata = [
    {name: 'HOMCOM FAN', area: 'Downtown', date: '1d', price: '$50'},
    {name: 'Ikea black out curtain', area: 'Downtown', date: '2d', price: '$150'},
    {name: 'Bell Motorcycle helmet', area: 'Downtown', date: '4d', price: '$55'},
    {name: 'Bag', area: 'Downtown', date: '4d', price: '$20'},
    {name: 'Oriental cup', area: 'Downtown', date: '4d', price: '$190'},
    {name: 'Jumper', area: 'Downtown', date: '20d', price: '$59'},
    {name: 'snikers', area: 'Downtown', date: '3d', price: '$210'},
    {name: 'ivory curtain', area: 'Downtown', date: '5d', price: '$70'}
];

const filterdata = [
    {name: 'all'},
    {name: 'Near by X'},
    {name: 'Korean X'},
    {name: 'Under $20 X'},
    {name: 'Size Small X'},
];

const ShowItem = (props) =>(
    <View style={styles.card}>
        <Image style={styles.itemImage} />
         <Text style={styles.itemText}>{props.itemInfo.name}</Text>
        <Text style={styles.detailItemText}>{props.itemInfo.area} . {props.itemInfo.date}</Text>
        <Text style={styles.price}>{props.itemInfo.price}</Text>

    </View>
);

const MainPage = () => {

    const [area, setArea] = useState("");
    const [items, setItems] = useState([]);
    
    const navigation = useNavigation();
  
    useEffect(() => {
      setArea("Downtown");
        setItems(itemdata);
    }, []);
  

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{area}</Text>
            <TextInput style={styles.inputText}
                placeholder="Search for anything"
                value={''}
                onChangeText={''}
                />
            <View>

            </View>
            <ScrollView  style={styles.scrollContainer}>
                {items.map((item, index) => {
                    return(
                        <ShowItem key={index} itemInfo={item}/>
                    );
                })}
            </ScrollView>
            {/*}
            <View  style={styles.itemContainer}>
                {items.map((item, index) => {
                    return(
                        <ShowItem key={index} itemInfo={item}/>
                    );
                })}
            </View>
            */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    scrollContainer:{
        flex:1, 

        margin: 10,
    },
    itemContainer:{
        flex:1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: 10,
    },
    card: {
        width: "50%",
        padding: 5,
    },
    titleText: {
        marginBottom: "1%",
        opacity: 0.6,
        fontWeight: "medium",
        fontSize: 32,
    },
    itemText: {
        marginBottom: "1%",
        fontWeight: "medium",
        fontSize: 20,
    },
    detailItemText: {
        marginBottom: "1%",
        fontWeight: "medium",
        fontSize: 15,
        color: "#aaa",
    },
    price: {
        marginBottom: "1%",
        fontSize: 24,
    },
    inputText: {
        width: "70%",
        marginLeft: 10,
        fontSize: 24,
        color: "#979797",
        backgroundColor:"lightgrey",
        padding:5,
    },

    itemImage:{
        width: "100%",
        height: 180,
        backgroundColor:"#ddd",
    },


});

export default MainPage;