// 20221108 Add Tabs by Jessi
 
/*
npm install @react-navigation/bottom-tabs
*/

import react from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
  } from "react-native";
  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen
import MainPage from "../pages/MainPage";
import HomePage from '../pages/HomePage';
import CategoryPage from '../pages/CategoryPage';
import SellPage from '../pages/SellPage';
import ChatPage from '../pages/ChatPage';
import SplashPage from '../pages/SplashPage';

import { TouchableOpacityBase } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Tab = createBottomTabNavigator();

//Customize Sell button
const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style ={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.Shadow
        }}
        //to sellpage
        onPress={onPress}
    >
        <View style={{
            width: 25,
            height: 25,            
            borderRadius: 35
            // backgroundColor: 'black'
        }}>
            {children}
            <Text style={{
                color: '#000000',
                fontSize: 12,
                top: 48
            }}> Sell </Text>
        </View>

    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator
            //initialRouteName='ExerciseScreensStack'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 8,
                    height: 78
        
                    //Shadow
                    // ,
                    // ...styles.Shadow
                }
            }}
        
        >
            <Tab.Screen name = "Main" component={MainPage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/Icons/Icon_Home.png')}
                            resizeMode = 'contain'
                            style={{
                                width: 24,
                                height: 25,
                                tintColor: focused ? '#613EEA' : '#000000'
                            }}
                            />
                            <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
                                HOME
                            </Text>
                    </View>
                ),
            }} />

            <Tab.Screen name = "Category" component={CategoryPage} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center',justifyContent: 'center', top: 10, left: -15}}>
                        <Image
                            source={require('../assets/Icons/Icon_Category.png')}
                            resizeMode = 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#613EEA' : '#000000'
                            }}
                            />
                            <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
                                Category
                            </Text>
                    </View>
                ),
            }}  />

            <Tab.Screen name = "Sell" component={SellPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>

                        <Image
                            source={require('../assets/Icons/Icon_Sell.png')}
                            resizeMode = 'contain'
                            style={{
                                width: 60,
                                height: 60,

                            }}
                            />
                            {/* <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}> 123 </Text> */}
                    </View>
                    )
                    ,
                    tabBarButton: (props) => (
                         <CustomTabBarButton {...props} />
                     )

                    // custom sellButton
                    //     <Image
                    //         source={require('../assets/Icons/Icon_Sell.png')}
                    //         resizeMode="contain"
                    //         style={{
                    //             width: 60,
                    //             height: 60,
                    //             // tintColor: focused ? '#B3261E' : '#000000'   //red and black
                    //         }}
                    //     />
                    // )
                    // ,
                    // tabBarButton: (props) => (
                    //     <CustomTabBarButton {...props} />
                    // )

                // basic sellButton
                // tabBarIcon: ({focused}) => (
                //     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                //         <Image
                //             source={require('../assets/Icons/Icon_Sell.png')}
                //             resizeMode = 'contain'
                //             style={{
                //                 width: 25,
                //                 height: 25,
                //                 tintColor: focused ? '#613EEA' : '#000000'
                //             }}
                //             />
                //             <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
                //                 Sell
                //             </Text>
                //     </View>
                // ),
            }}  />

            <Tab.Screen name = "Chat" component={ChatPage}  options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10, right: -15}}>
                        <Image
                            source={require('../assets/Icons/Icon_Chat.png')}
                            resizeMode = 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#613EEA' : '#000000'
                            }}
                            />
                            <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
                            Chat
                            </Text>
                    </View>
                ),
            }}  />

            <Tab.Screen name = "Splash" component={SplashPage}  options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../assets/Icons/Icon_Account.png')}
                            resizeMode = 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#613EEA' : '#000000'
                            }}
                            />
                            <Text style={{color: focused ? '#613EEA' : '#000000', fontSize: 12}}>
                                Account
                            </Text>
                    </View>
                ),
            }}  />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    Shadow : {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    IconButton : {

    }
})

export default Tabs;