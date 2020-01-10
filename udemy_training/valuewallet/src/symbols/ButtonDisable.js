import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ButtonDisable extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.button1}>
          <View style={styles.rectangle20} />
          <Text style={styles.signup}>Signup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  button1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    opacity: 0.3
  },
  rectangle20: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(233,68,106,1)",
    position: "absolute",
    borderRadius: 4
  },
  signup: {
    top: "30.77%",
    left: "35.24%",
    width: "29.84%",
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "montserrat-medium",
    lineHeight: 20,
    letterSpacing: 0.53,
    textAlign: "center"
  }
});
