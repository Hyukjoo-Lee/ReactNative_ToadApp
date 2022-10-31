import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LoginPage_2 from "./pages/LoginPage_2";
import PasswordPage from "./pages/PasswordPage";
import SingUpPage from "./pages/SignupPage";
import SplashPage from "./pages/SplashPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* <Stack.Screen name="Password" component={PasswordPage} /> */}

        {/* <Stack.Screen name="Splash" component={SplashPage} /> */}
        {/* <Stack.Screen name="SignUp" component={SingUpPage} /> */}

        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        /> */}

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login_2"
          component={LoginPage_2}
        />

        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
