import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Pokedex from "../screens/Pokedex";
import Account from "../screens/Account";
import Favorites from "../screens/Favorites";
import { styles } from "../assets/styles/styles";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: "", tabBarIcon: () => renderPokeBall() }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/images/pokeball.png")}
      style={styles.pokeball}
    />
  );
}
