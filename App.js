import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { View } from "react-native";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import ListItem from "./components/ListItem";
import Chat from "./screens/Chat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackVisible: false,
            title: "Active users",
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "800" },
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ route }) => ({
            headerBackVisible: false,
            title: route.params.name,
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
