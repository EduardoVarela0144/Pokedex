import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokeball: {
    width: 75,
    height: 75,
    top: -15,
  },
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: 65,
  },
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
