import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? -30 : 20,
  },
  pokeball: {
    width: 75,
    height: 75,
    top: -15,
  },
  flatListContentContainer: {
    paddingHorizontal: 5,
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
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  number_single: {
    color: "#fff",
    fontSize: 27,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  name_single: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  bg: {
    width: "100%",
    height: 500,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: { marginHorizontal: 20, marginTop: 30 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
  },
  image_single: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
  contentType: {
    padding: 20,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
