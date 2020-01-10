import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class IPhoneXHomeIndicatorHomeIndicatorOnLight extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rectangle24} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  rectangle24: {
    left: "32.27%",
    width: 134,
    height: 5,
    backgroundColor: "rgba(211,215,224,1)",
    position: "absolute",
    bottom: 9,
    borderRadius: 100
  }
});
