import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialBasicFooter extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.btnWrapper1}>
          <Icon
            name={"keyboard-backspace"}
            type={"MaterialCommunityIcons"}
            style={styles.icon1}
          />
          <Text style={styles.btn1Text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper2}>
          <Text style={styles.btn2Text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnWrapper3}>
          <Icon
            name={"checkbox-multiple-marked-outline"}
            type={"MaterialCommunityIcons"}
            style={styles.icon3}
          />
          <Text style={styles.btn3Text}>Buy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(153,133,190,1)",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    borderRadius: 0,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  btnWrapper1: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  btn1Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  btnWrapper2: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  btn2Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  },
  btnWrapper3: {
    flex: 0.33,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  btn3Text: {
    color: "#FFFFFF",
    opacity: 0.8,
    fontFamily: "roboto-regular"
  }
});
