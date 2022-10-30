import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SingUpPage from "./pages/SignupPage";
import SplashPage from "./pages/SplashPage";
import "expo-dev-client";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="SignUp" component={SingUpPage} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
