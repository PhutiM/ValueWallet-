import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class ButtonActive extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.button}>
          <Center>
            <ImageBackground
              style={styles.rectangle19}
              source={require("../assets/images/Gradient_EbI3Sii.png")}
            />
          </Center>
          <Text style={styles.signIn}>REG</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  button: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  rectangle19: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 4
  },
  signIn: {
    top: "30.77%",
    left: "35.24%",
    width: "29.84%",
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "montserrat-medium",
    lineHeight: 20,
    letterSpacing: 0.53,
    textAlign: "center"
  }
});
