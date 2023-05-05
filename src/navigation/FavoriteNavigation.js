import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite Screen"
        component={Favorites}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
