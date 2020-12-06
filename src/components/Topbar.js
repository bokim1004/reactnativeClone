import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function CustomDrawerMenu() {
  return (
    <View style={styles.drawerContainer}>
      <Image
        source={require("../images/wecode.png")}
        style={styles.drawerProfileIcon}
      />
      <Text style={styles.text}> wecode</Text>
      <Icon style={styles.icon} name="search1" size={20} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: "#481348",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  drawerProfileIcon: {
    resizeMode: "contain",
    width: 40,
    height: 40,
    marginTop: 50,
    marginLeft: 30,
    borderRadius: 10,
    position: "relative",
    bottom: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    position: "relative",
    left: 90,
    top: 50,
  },
  icon: {
    position: "relative",
    left: 200,
    top: 50,
  },
});
