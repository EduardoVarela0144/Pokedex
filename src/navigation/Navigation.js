import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}
