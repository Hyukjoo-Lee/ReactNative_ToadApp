import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PasswordPage from "./pages/PasswordPage";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MainPageSearch from "./pages/MainPageSearch";
import ItemDetail from "./pages/ItemDetail";
import SplashPage from "./pages/SplashPage";
import Tabs from "./navigation/Tabs";
import { useFonts, Lexend_400Regular } from "@expo-google-fonts/lexend";
import AnimationApp from "./pages/Animation";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          // options={{ headerShown: false }}
          name="Chat"
          component={Chat}
        /> */}
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Splash"
          component={SplashPage}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="SignUp"
          component={SignUpPage}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Password"
          component={PasswordPage}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Main"
          component={MainPage}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="MainSearch"
          component={MainPageSearch}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="ItemDetail"
          component={ItemDetail}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Home"
          component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
