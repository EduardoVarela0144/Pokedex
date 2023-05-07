import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name_single}>{capitalize(name)}</Text>
          <Text style={styles.number_single}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image_single} />
        </View>
      </SafeAreaView>
    </>
  );
}
