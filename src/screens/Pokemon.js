import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../assets/styles/styles";
import { getPokemonDetailsApi } from "../api/pokemon";
export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  if (!pokemon) return null;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
}
