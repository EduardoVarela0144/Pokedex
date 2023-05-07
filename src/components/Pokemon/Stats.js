import React, { Component } from "react";
import { Text, View } from "react-native";
import { styles } from "../../assets/styles/styles";
import { map, capitalize } from "lodash";
export default function Stats(props) {
  const { stats } = props;
  const barStyles = (num) => {
    const color = num > 40 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };
  return (
    <View style={styles.content_stats}>
      <Text style={styles.title_stats}> Base Stats </Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.info_stats}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.block_info}>
            <Text style={styles.number_stats}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
