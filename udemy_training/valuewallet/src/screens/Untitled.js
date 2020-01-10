import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Center>
          <Text style={styles.text}>
            Start from scratch{"\n"}
            {"\n"}or{"\n"}
            {"\n"}Drag and drop a Sketch file
          </Text>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  text: {
    color: "#121212",
    position: "absolute",
    fontSize: 24,
    textAlign: "center"
  }
});
