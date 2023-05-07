import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/styles/styles";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon Screen", { id: pokemon.id });
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
