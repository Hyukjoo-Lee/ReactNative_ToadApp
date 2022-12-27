// 20221224 Add CategoryPage by Jessi

// create category table on DB and connect DB



import { useState } from "react";
import { 
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  //Choose category title container ---------------------------
  container_1: {
    margin: 10,
    height: 50,
    width: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 32,
    textAlign: "center",
    
    marginHorizontal: 90,   
  },
  titleUnderLine: {
    top: 5,
    height: 1,
    backgroundColor: "black",
    opacity: 0.3,                
    marginTop: 10,
    marginBottom: 10,
  },

// category list container -------------------
  container_2: {
    flex: 0.6,
    margin: 10,
  },
  contentContainer: {
    // flex: 1,
    width: "100%",
    height: 70,
    
  },  
  contentTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    color: "#979797",
  },
});


/**
 * CategoryPage by Jessi
 */
const CategoryPage = () => {

  const navigation = useNavigation();

  const handleCategory = () => {
    navigation.navigate("sell");
  };

  return (
    <View style={styles.container}>

        {/* Choose category title container */}    
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
                title="<"
                onPress={{}}
              />

            <Text style={styles.title}> Choose category </Text>

          </View>

          <View style={styles.titleUnderLine}/>
        </View>


        {/* Category list */}
        <View style={styles.container_2}>

          {/* Clothing Content */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Clothing</Text>
            <View style={styles.titleUnderLine}/>
          </View>
          
          {/* Shoes Content */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Shoes</Text>
            <View style={styles.titleUnderLine}/>
          </View>

          {/* Accessories Content */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Accessories</Text>
            <View style={styles.titleUnderLine}/>
          </View>


        </View>


  
    </View>
  );
};

export default CategoryPage;