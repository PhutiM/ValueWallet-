import React, { Component } from "react";
import { StyleSheet, View, TextInput, StatusBar } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialIconTextbox1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          name={"security-lock"}
          type={"MaterialCommunityIcons"}
          style={styles.iconStyle}
        />
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.inputStyle}
          secureTextEntry={this.props.secureTextEntry}
          clearButtonMode={"while-editing"}
          keyboardAppearance={"dark"}
          value={value}
          onChangeText={onChangeText}
        />
        <StatusBar hidden={true} style={styles.statusBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingLeft: 8,
    position: "absolute",
    top: 9.5,
    left: 0,
    height: 24,
    width: 32
  },
  inputStyle: {
    top: 0,
    left: 35,
    width: 359,
    height: 43,
    flex: 1,
    color: "#000",
    position: "absolute",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  statusBar: {}
});
