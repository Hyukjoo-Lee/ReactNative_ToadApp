import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, Dimennsions} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {SearchBar} from 'react-native-elements';

const filterSearchData = [
    { text: "Strollers" },
    { text: "Indoor Gear" },
    { text: "Baby Toys" },
    { text: "Safely Gate" },
    { text: "Playmats" },
    { text: "Baby Toys" },
    { text: "Baby Monitors" },
    { text: "Mobile" },
    { text: "Books" },
    { text: "Car Seat Accessories" },
    { text: "Swings" },
  ];

const KeyWordButton = (props) => (
    <View>
        <TouchableOpacity onPress={()=> {props.onPress(props.keyword)}} activeOpacity={0.7}>
            <View style={styles.buttonCommonStyle}>
                <Text style={styles.buttonTextStyle}>{props.keyword}</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const MainPageSearch = () => {
    const [keyWords, setKeyWords] = useState([]);
    const [search, setSearch] = useState('');

    const route = useRoute();
    const keyWord = route.params?.paramKey;
    const navigation = useNavigation();

    useEffect(() => {
        setKeyWords(filterSearchData);
      setSearch('');
    }, []);
    const updateSearch = (input) => {
        setSearch(input);
    }

    const onSearchSubmit = () => {
        //alert("Enter" + search);
        navigation.navigate("Main", {
            keyWord: search
        });
    }

    const onPress = (input) => {
        //alert("clicked" + input + "__");
        setSearch(input); //it doesn't work
        // navigation.navigate("Main", {
        //     keyWord: input
        // });
    }

    return (
        <View style={styles.container}>
            <SearchBar
                lightTheme
                    placeholder="Type Here..."
                    round = {true}
                    onChangeText = {updateSearch}
                    onSubmitEditing = {onSearchSubmit}
                    value={search}
            />
            {/* <TextInput
                style={styles.inputText}
                placeholder="Search for anything"
                
                value={search}
            /> */}
            <Text style={styles.titleText} >Popular Searches</Text>
            <View style={styles.keywordContainer}>
                {keyWords.map((keyword)=>{
                    return(
                    <KeyWordButton 
                        key = {keyword._id}
                        onPress = {onPress}
                        keyword = {keyword.text}
                    />);
                })}
                {/* <KeyWordButton onPress = {onPress} keyword ={"Strollers"}/>
                <KeyWordButton onPress = {onPress} keyword ={"Indoor Gear"}/> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:10,
        backgroundColor: "white",
    },
    titleText: {
        marginLeft: 10,
        marginTop: 20,
        marginBottom: "1%",
        fontWeight: "medium",
        fontSize: 20,
      },
      keywordContainer:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
  
      },
      buttonCommonStyle: {
        alignSelf: "center",
        padding: 12,
        backgroundColor: "white",
        paddingVertical: 8, 
        borderRadius: 30,
        borderColor: "#c7c7c7",
        borderWidth: 2,
        margin: 5,
      },
      buttonTextStyle: {
        fontSize: 16,
        textAlign: "center",
      },
      inputText: {
        width: "95%",
        margin: 10,
        fontSize: 24,
        color: "#979797",
        backgroundColor: "white",
        borderColor: "lightgray",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
      },
});

export default MainPageSearch;