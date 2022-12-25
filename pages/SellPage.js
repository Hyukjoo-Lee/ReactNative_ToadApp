// 20221219 Add SellPage by Jessi

import React, { useEffect, useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/base";

import * as firebase from "../components/config";
import * as ImagePicker from 'expo-image-picker'
import { firebaseConfig } from "../components/config";


const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  //Post title container ---------------------------
  container_1: {
    margin: 10,
    height: 50,
    width: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 32, 
    marginHorizontal: 140,   
    // marginRight: 50,
    // marginLeft: 50,
  },
  topButton: {
    margin: "100",
    backgroundColor: "red"
  },
  // Choose sell photo container -------------------
  container_2: {
    flex: 0.6,
    margin: 10,
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  // imageField: {
  //   width: 300,
  //   height: 160,
  //   backgroundColor: "lightgray",
  // },

  // Sell's content container ----------------------
  container_3: {
    flex: 0.6,
    margin: 10,
  },
  contentContainer: {
    // flex: 1,
    width: "100%",
    height: 80,
  },
  contentTitle: {
    marginLeft: 10,
    fontSize: 15,
    color: "#979797",
  },
  contentInputContainer: {
    width: "100%",
    borderColor: "black",
  },  
  titleInput: {
    width: "100%",
    // borderWidth: 0.2,
    // borderRadius: 7,
    // backgroundColor: "green",
    backgroundColor: "transparent",
    paddingHorizontal: 15,    
    paddingVertical: 10,
    
    marginTop: 5,
  },
  priceInput: {
    width: "40%",
    // borderWidth: 0.2,
    // borderRadius: 7,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },  
  titleUnderLine: {
    top: 5,
    height: 1,
    backgroundColor: "black",
    opacity: 0.3,                
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    width: "100%",
    // borderWidth: 0.2,
    // borderRadius: 7,
    // backgroundColor: "white",
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  bottomContentContainer: {
    // flex: 1,
    width: "100%",
    height: 55,
  },



  nextButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  nextButtonText: {
    color: "black",
    fontSize: 16,
  },
  //Sell's option container ------------------------
  container_4: {
    flex: 0.6,
    margin: 10,
    
    // flex: 0.9,
    marginTop: 400,
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
  },
  googleButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "lightgray",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
  },
  authButtonText: {
    color: "black",
    fontSize: 16,
  },
  nextButtonText: {
    color: "black",
    fontSize: 16,
  },
});


/**
 * SellPage by Jessi
 */
const SellPage = () => {
  
  const [user, setUser] = useState();
  const [title, setTitle] = useState("");

  const navigation = useNavigation();
  
  const handleCategory = () => {
    navigation.navigate("Category");
  };
  
  const [price, setPrice] = useState("");

  const [trade, setTrade] = useState(false);
  const [negotiable, setNegotiable] = useState(false);

  const priceOpts = [];

  const priceOptClick = ()=>{
    //type check, ===
    if(trade === true) priceOpts.push("trade");
    if(negotiable === true) priceOpts.push("negotiable");

    Alert.alert(
      "priceOpts",
      "Hello user, your price options  are " + priceOpts.toString()
    );

  }

  const [description, setDescription] = useState("");


  if (!user) {
    return (
      <View style={styles.container}>


        {/* Post title container */}    
        <View style={styles.container_1}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            
            <Button
                // style={ styles.topButton }
                title="<"
                onPress={{}}
              />

            <Text style={styles.title}> Post </Text>

            <Button
              title="Done"
              onPress={{}}
            />

          </View>


          <View style={styles.titleUnderLine}/>
        </View>


        {/* Choose sell photo container */}
        <View style={styles.container_2}>
          
          {/* choose photo rectangle button */}
        </View>


         {/* Sell's content container */}         
        <View style={styles.container_3}>


          {/* title */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Title</Text>
              <KeyboardAvoidingView style={styles.contentInputContainer}>       
                {/* setTitle check */}
                <TextInput
                  placeholder=""
                  onChangeText={(text) => setTitle(text)}
                  style={styles.titleInput}
                />
              </KeyboardAvoidingView>
          </View>
          <View style={styles.titleUnderLine}/>


          {/* Category page */}
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={handleCategory}>
              <Text style={styles.contentTitle}>Category</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleUnderLine}/>


          {/* price */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Price</Text>
            <KeyboardAvoidingView style={styles.contentInputContainer}>    

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                {/* price input */}

                {/* <Text >$</Text> */}

                {/* setPrice check */}
                {/* only enter number */}
                {/* two decimals */}
                <TextInput                  
                  style={styles.priceInput}
                  
                  placeholder="$"
                  onChangeText={(text) => setPrice(text)}
                  keyboardType='number-pad'
                  // underlineColorAndroid="#000"
                />

                {/* <TextInput
                    placeholder="$"
                    onChangeText={(text) => setPrice(text)}
                    style={styles.PriceInput}
                /> */}

                <View style={{ flexDirection: "row" }}>
                  {/* Trade checkbox */}
                  <CheckBox
                    title="Trade"                  
                    checked={trade}
                    onPress={()=>setTrade(!trade)}
                    checkedIcon="check-circle-o"
                    uncheckedIcon="check-circle-o"
                  />

                  {/* Negotiable checkbox */}
                  <CheckBox
                    title="Negotiable"
                    checked={negotiable}
                    onPress={()=>setNegotiable(!negotiable)}
                    checkedIcon="check-circle-o"
                    uncheckedIcon="check-circle-o"                  
                  />
                </View>
                
              </View>
            </KeyboardAvoidingView>

            {/* price options test btn */}
            {/* <Button title="Price Options Check" onPress={priceOptClick} />     */}

          </View>
          <View style={styles.titleUnderLine}/>

          {/* Description */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Description</Text>
            <KeyboardAvoidingView style={styles.contentInputContainer}>
              <TextInput
              style={styles.description}
              // value={this.state.value}
              // onChangeText={text => setDescription({value:text})}
              onChangeText={text => setDescription(text)}
              multiline={true}
              underlineColorAndroid='transparent'
              />
            </KeyboardAvoidingView>
          </View>

        </View>


        {/* Sell's option container */}
        <View style={styles.container_4}>

          {/* Bold line */}
          <View style={{
              top: 5,
              height: 8,
              backgroundColor: "black",
              opacity: 0.3,                
              marginTop: 10,
              marginBottom: 50,
            }}
          />

          {/* Condition */}
          <View style={styles.bottomContentContainer}>
            <Text style={styles.contentTitle}>Condition</Text>
          </View>
          <View style={styles.titleUnderLine}/>

          {/* Age */}
          <View style={styles.bottomContentContainer}>
            <Text style={styles.contentTitle}>Age</Text>
          </View>
          <View style={styles.titleUnderLine}/>

          {/* Where to meet */}
          <View style={styles.bottomContentContainer}>
            <Text style={styles.contentTitle}>Where to meet</Text>
          </View>
          <View style={styles.titleUnderLine}/>

        </View>


      </View>
    );
  }


  // return(
  //   <View>
  //     <Text> test </Text>
  //   </View>
  // );
}


export default SellPage;