import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen

import CategoryPage from "../pages/CategoryPage";
import SellPage from "../pages/SellPage";
import ChatPage from "../pages/ChatPage";

// SVGs
import HomeImage from "../assets/Icons/icon_House.svg";
import CategoryImage from "../assets/Icons/icon_Category.svg";
import ChatImage from "../assets/Icons/icon_Chat.svg";
import AccountImage from "../assets/Icons/icon_account_box.svg";
import SellImage from "../assets/Icons/icon_Sell.svg";
import AccountPage from "../pages/AccountPage";
import { theme } from "../src/theme";
import CustomText from "../components/CustomText";
import MainPage from "../pages/MainPage";

// To render Svg Icon Files

const RenderHomeSVG = (props) => {
  return (
    <HomeImage
      style={{
        stroke: props.color,
        fill: props.color,
        marginTop: 6.5,
      }}
    />
  );
};

const RenderCategorySVG = (props) => {
  return (
    <CategoryImage
      style={{
        stroke: props.color,
        fill: props.color,
        marginTop: 6.5,
      }}
    />
  );
};

const RenderChatSVG = (props) => {
  return (
    <ChatImage
      style={{
        stroke: props.color,
        fill: props.color,
        marginTop: 6.5,
      }}
    />
  );
};

const RenderAccountSVG = (props) => {
  return (
    <AccountImage
      style={{
        stroke: props.color,
        fill: props.color,
        marginTop: 6.5,
      }}
    />
  );
};

const RenderSellSVG = (props) => {
  return (
    <SellImage
      style={{
        stroke: props.color,
        fill: props.color,
        marginTop: 6.5,
      }}
    />
  );
};

// const RenderHomeSVG = (props) => {
//   return <HomeImage style={{ stroke: props.color, marginTop: 6.5 }} />;
// };
// const RenderHomeSVG = (props) => {
//   return <HomeImage style={{ stroke: props.color, marginTop: 6.5 }} />;
// };

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      //initialRouteName='ExerciseScreensStack'
      //initialRouteName='HomeScreen'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 100,
          elevation: 0,
          //Shadow effect
          // ,
          // ...styles.Shadow
        },

        // TabBarComponent: props => {
        //     return (
        //         <View style={{
        //             position: 'absolute',
        //             left: 0,
        //             right: 0,
        //             bottom: 0,
        //         }}>
        //             <TabBarComponent {...props} />
        //         </View>
        //     )

        // },

        // tabBarBackground: () => {
        //   <View>
        //     <Image source={require("../assets/Icons/Icon_TabBackground.png")} />
        //   </View>;
        // },

        // tabBarBackground: {
        //     ImageBackground: require('../assets/Icons/Icon_TabBackground.png')
        // },
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderHomeSVG
                  color={focused ? theme.primary[700] : theme.neutral[400]}
                />
              </ImageBackground>
              <CustomText
                style={{
                  color: focused ? theme.primary[700] : theme.neutral[400],
                }}
              >
                Home
              </CustomText>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={CategoryPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderCategorySVG
                  color={focused ? theme.primary[700] : theme.neutral[400]}
                />
              </ImageBackground>
              <CustomText
                style={{
                  color: focused ? theme.primary[700] : theme.neutral[400],
                }}
              >
                Category
              </CustomText>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={SellPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderSellSVG
                  color={focused ? theme.primary[700] : theme.neutral[400]}
                />
              </ImageBackground>
              <CustomText
                style={{
                  color: focused ? theme.primary[700] : theme.neutral[400],
                }}
              >
                Sell
              </CustomText>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderChatSVG
                  color={focused ? theme.primary[700] : theme.neutral[400]}
                />
              </ImageBackground>
              <CustomText
                style={{
                  color: focused ? theme.primary[700] : theme.neutral[400],
                }}
              >
                Chat
              </CustomText>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  top: -10,
                }}
              >
                <RenderAccountSVG
                  color={focused ? theme.primary[700] : theme.neutral[400]}
                />
              </ImageBackground>

              <CustomText
                style={{
                  color: focused ? theme.primary[700] : theme.neutral[400],
                }}
              >
                Account
              </CustomText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   Shadow: {
//     shadowColor: "#7F5DF0",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.5,
//     elevation: 5,
//   },
//   IconButton: {},
// });

export default Tabs;
