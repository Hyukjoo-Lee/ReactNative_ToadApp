import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PasswordPage from "./pages/PasswordPage";
import SignUpPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "expo-dev-client";

import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";


// 20221108 Add Tabs by Jessi
import Tabs from "./Navigation/Tabs";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
        {/* <Stack.Navigator>
          <Stack.Screen name="Main" component={MainPage} />

          <Stack.Screen name="Splash" component={SplashPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen name="Password" component={PasswordPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator> */}

    </NavigationContainer>
  );
}
