import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpPage from "./pages/SignupPage";
// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";

import SplashPage from "./pages/SplashPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen name="Home" component={HomePage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
