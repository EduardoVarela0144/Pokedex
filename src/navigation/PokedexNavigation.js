import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screens/Pokedex";
import Pokemon from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex Screen"
        component={Pokedex}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon Screen"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
