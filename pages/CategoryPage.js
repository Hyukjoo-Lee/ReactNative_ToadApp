// 20221109 Add CategoryPage by Jessi

import { useState } from "react";
import { 
  View,
  StyleSheet,
  Text,
  TextInput,
  Button
} from "react-native";


const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  //Choose category title container ---------------------------
  container_1: {
    margin: 10,
    height: 50,
    justifyContent: "center",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    // margin: 20,
    fontWeight: "500",
    fontSize: 32,
    textAlign: "center"
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
    height: 80,
  },
});


/**
 * CategoryPage by Jessi
 */
const CategoryPage = () => {


  return (
    <View style={styles.container}>

        {/* Choose category title container */}    
        <View style={styles.container_1}>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            
            <Button
                title="<"
                onPress={{}}
                // color="transparent"
              />

            <Text style={styles.title}> Choose category </Text>

          </View>


          <View style={styles.titleUnderLine}/>
        </View>

        {/* Category list */}
        <View style={styles.container_2}>

          {/* Category page */}
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Category</Text>
          </View>
          <View style={styles.titleUnderLine}/>


        </View>


  
    </View>
  );
};

export default CategoryPage;