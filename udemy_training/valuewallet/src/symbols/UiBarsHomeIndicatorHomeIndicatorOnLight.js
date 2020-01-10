import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class UiBarsHomeIndicatorHomeIndicatorOnLight extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle12} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  rectangle12: {
    left: "32.27%",
    width: 134,
    height: 5,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    bottom: 9,
    borderRadius: 100
  }
});
