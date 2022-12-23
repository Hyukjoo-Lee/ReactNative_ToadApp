// 20221109 Add CategoryPage by Jessi

import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

/**
 * CategoryPage by Jessi
 */
const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View>
      <Text> Hello CategoryPage :D </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
    // <NavigationContainer>
    //  <Tab.Navigator
    //   tabBarOptions={{
    //     labelStyle:{fontSize:18},
    //     activeTintColor: 'red'

    //   }}
    //   >
    //       <Tab.Screen
    //         name = "Home"
    //         component={HomePage}
    //       />

    //       <Tab.Screen
    //         name = "Splash"
    //         component={SplashPage}
    //       />

    //       <Tab.Screen
    //         name = "SignUp"
    //         component={SignUpPage}
    //       />

    //   </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default CategoryPage;
