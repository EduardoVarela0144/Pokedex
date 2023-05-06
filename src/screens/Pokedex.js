import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getPokemonsApi, getPokemonDetailByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState();
  console.log("pokemons--->", pokemons);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    console.log("Hello world");
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });

        console.log(pokemonDetails);
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text> Pokedex </Text>
    </View>
  );
}
