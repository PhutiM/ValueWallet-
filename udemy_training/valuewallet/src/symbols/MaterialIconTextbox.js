import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "@builderx/icons";
import { TextInput } from "react-native-gesture-handler";

export default class MaterialIconTextbox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          name={this.props.icon}
          type={"MaterialCommunityIcons"}
          style={styles.iconStyle}

        />
        <TextInput style={styles.text}
                      placeholder={this.props.placeholder}
                      style={styles.text}
                      secureTextEntry={this.props.secureTextEntry}
                      clearButtonMode={"while-editing"}
                      keyboardAppearance={"dark"}
                      value={this.props.value}
                      onChangeText={this.props.onChangeText}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingLeft: 8
  },
  text: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});
