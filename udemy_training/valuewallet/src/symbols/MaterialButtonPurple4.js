import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default class MaterialButtonPurple4 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style ]} 
      onPress={this.props.onPress}>
        <Text style={styles.caption}>{this.props.text}</Text>
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
    minWidth: 88,
    borderRadius: 2
   },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
