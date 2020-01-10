import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class UiBarsStatusBarsOverridesBlackTime extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.style}>9:41</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  style: {
    top: "9.52%",
    left: 0,
    height: 18,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    fontSize: 15,
    fontFamily: "sfprotext-semibold",
    letterSpacing: -0.3,
    textAlign: "center"
  }
});
