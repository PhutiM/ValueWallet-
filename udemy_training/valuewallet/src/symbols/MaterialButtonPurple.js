import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Button } from "react-native";

export default class MaterialButtonPurple extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
      <Button 
           title={this.props.text}
           color={this.props.color}
           onPress={this.props.navigation}>
      </Button>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(153,133,190,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
