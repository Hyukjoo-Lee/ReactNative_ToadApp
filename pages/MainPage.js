//hye kyung ko
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState} from "react";
import { useNavigation, useRoute  } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import {SearchBar} from 'react-native-elements';

const itemdata = [
  { name: "Baby mobile on Sale!", area: "Downtown", date: "4d", price: "$17", image: require("../assets/items/itemMobile1.png")},
  { name: "Good stroller", area: "North Vancouver", date: "5d", price: "$6", image: require("../assets/items/itemStroller1.png")},
  { name: "Baby toy! almost new!",area: "Downtown", date: "1d",price: "$17", image: require("../assets/items/itemToy2.png")},
  { name: "Good condition toy", area: "Downtown", date: "4d", price: "$6", image: require("../assets/items/itemToy1.png")},
  { name: "Baby swimsuit&gears", area: "West end", date: "1d", price: "$17", image: require("../assets/items/itemSwim1.png") },
  { name: "Never used toy", area: "Downtown", date: "5d", price: "$6", image: require("../assets/items/itemToy3.png") },
  { name: "Swedish Stroller", area: "Vancouver", date: "3d", price: "$210", image: require("../assets/items/itemStroller4.png") },
  { name: "Vintage Stroller", area: "Downtown", date: "5d", price: "$70", image: require("../assets/items/itemStroller3.png")},
  { name: "Norwegian Stroller", area: "Burnaby", date: "2d", price: "$55", image: require("../assets/items/itemStroller2.png") },
  { name: "Best Men's Jeans", area: "Downtown", date: "2d", price: "$30", image: require("../assets/items/itemJeans1.png")},
];

const filterdata = [
  { name: "all" },
  { name: "Near by X" },
  { name: "Korean X" },
  { name: "Under $20 X" },
  { name: "Size Small X" },
];

const distancedata = [
  {label: '12K', value: '12K'},
  {label: '24K', value: '24K'},
  {label: '36K', value: '36K'},
];

const ShowItem = (props) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={props.onPress}>
    <Image style={styles.itemImage}                     
      source={props.itemInfo.image}
    />
    <Text style={styles.itemText}>{props.itemInfo.name}</Text>
    <Text style={styles.detailItemText}>
      {props.itemInfo.area} . {props.itemInfo.date}
    </Text>
    <Text style={styles.price}>{props.itemInfo.price}</Text>
    </TouchableOpacity>
  </View>
);

const MainPage = () => {
  
  const [area, setArea] = useState("");
  const [items, setItems] = useState([]);

  const [distanceOpen, setDistanceOpen] = useState(false);
  const [distanceValue, setDistanceValue] = useState(null);
  const [distance, setDistance] = useState([
    { label: "12K", value: "12K" },
    { label: "24K", value: "24K" },
    { label: "36K", value: "36K" },
  ]);

  const [search, setSearch] = useState('');

  const route = useRoute();
  const keyWord = route.params?.keyWord;

  const navigation = useNavigation();
 
  useEffect(() => {
    setArea("Downtown");
    setItems(itemdata);
    setSearch('');
    // setDistances(distancedata);
  }, []);

  const updateSearch = (search) => {
    setSearch({search});
  }

  const onTextInputPress = () => {
    //setSearch("Click");
    //alert("Hello...");
    //navigation.navigate("MainSearch");
    navigation.navigate("MainSearch", {
      paramKey: "Param KEYWORD"
    });
  }

  const onItemPress = () => {
    navigation.navigate("ItemDetail", {
      paramKey: "Param KEYWORD"
    });
  }
  // const onGenderOpen = useCallback(() => {
  //   //
  // }, []);

  // const {control } = useForm();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{area}</Text>
        <View style={styles.distancePicker}>
          <DropDownPicker
              style={styles.dropdown}
              open={distanceOpen}
              value={distanceValue} //genderValue
              items={distance}
              setOpen={setDistanceOpen}
              setValue={setDistanceValue}
              setItems={setDistance}
          />
      </View>
    </View>
    {/* <SearchBar
      lightTheme
        placeholder="Type Here..."
        onChangeText = {updateSearch}
        value={search}
      /> */}
    <View style={styles.searchBar}>
        <TouchableOpacity onPress={onTextInputPress}>
          <TextInput
            style={styles.inputText}
            placeholder="Search for anything"
            // onTouchStart={onTextInputPress} //only work on IOS
            //value={route?.params?.paramKey}
            value={keyWord}
            editable={false}
          />
        </TouchableOpacity>
                <Image
                    source={require('../assets/Icons/icon_filter.png')}
                    //resizeMode = 'contain'
                    style={{
                        width: 60,
                        height: 60,
                    }}
                />
                <Image
                    source={require('../assets/Icons/icon_notification.png')}
                    //resizeMode = 'contain'
                    style={{
                        width: 60,
                        height: 60,
                    }}
                />
      </View>
      <View></View>
      <FlatList
        style={styles.gridContainer}
        numColumns={2}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ShowItem onPress = {onItemPress} itemInfo={item} />}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  gridContainer: {
    marginTop: 20,
  },
  titleView:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    marginBottom: 80,
  },
  titleText: {
    marginBottom: "1%",
    opacity: 0.6,
    fontWeight: "medium",
    fontSize: 32,
    paddingLeft: 10,
    paddingRight: 10, 
  },
  searchBar:{
      flex:1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      // margin: 10,
      marginBottom: 50,
  },
  distancePicker:{
    width: 80,
  },
  card: {
    width: "48%",
    //alignItems: 'center',
    margin: "1%",
    //borderWidth : 0.5,
    //marginLeft: '2%',
    padding: 10,
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
    fontWeight: "bold",
  },
  inputText: {
    width: "110%",
    //marginLeft: 10,
    fontSize: 24,
    color: "#979797",
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 240,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  placeholderStyles: {
    color: "grey",
  },
});

export default MainPage;
