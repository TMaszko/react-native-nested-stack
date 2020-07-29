import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePreviewStack from "./ProfilePreviewStack";

const linking = {
  prefixes: [],
  config: {
    initialRouteName: "Home",
    screens: {
      Home: "home",
      ProfilePreviewStack: {
        path: "profile-preview",
        screens: {
          DrawerHome: {
            path: "",
            screens: {
              ProfileHome: "",
            },
          },
        },
      },
    },
  },
};

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Navigate to profile stack"
        onPress={() => navigation.navigate("ProfilePreviewStack")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ProfilePreviewStack"
          component={ProfilePreviewStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
