import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import PokedexNavigation from "../navigation/PokedexNavigation";
import AccountNavigation from "../navigation/AccountNavigation";
import FavoriteNavigation from "../navigation/FavoriteNavigation";
import { styles } from "../assets/styles/styles";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          title: "",
          tabBarIcon: () => renderPokeBall(),
          //headerTitle: "Pokedex",
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
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
