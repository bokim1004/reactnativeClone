import React from "react";
import {View, SafeAreaView, TextInput, StyleSheet} from "react-native";

export default HomeMenu = () => {
  // const channelListItem = (item) => <Text>{item}</Text>;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput
            style={styles.searchBox}
            placeholderTextColor="grey"
            plaveholder="Jump to"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    justifyContent: "flex-start",
    height: "100%",
  },
});
