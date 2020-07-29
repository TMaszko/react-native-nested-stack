import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function DrawerHome() {
  return (
    <View>
      <Text>DrawerHome</Text>
    </View>
  );
}

const ProfilePreviewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerHome" component={DrawerHome} />
    </Stack.Navigator>
  );
};

export default ProfilePreviewStack;
