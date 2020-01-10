import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class B extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox={"-0 -0 38.5 38.5"} style={styles.path2}>
          <Path
            strokeWidth={0}
            fill={"rgba(255,255,255,1)"}
            d={
              "M25.16 13.68 C16.17 22.56 16.17 22.56 16.17 22.56 L13.72 19.76 C13.72 19.76 12.23 19.07 11.61 19.62 C10.98 20.17 11.46 21.74 11.46 21.74 L14.96 25.74 C14.96 25.74 15.63 26.23 16.04 26.25 C16.06 26.25 16.08 26.25 16.09 26.25 C16.49 26.25 17.15 25.82 17.15 25.82 L27.27 15.82 C27.27 15.82 27.87 14.29 27.29 13.70 L25.16 13.68 M19.25 35.50 C10.29 35.50 3.00 28.21 3.00 19.25 C3.00 10.29 10.29 3.00 19.25 3.00 C28.21 3.00 35.50 10.29 35.50 19.25 C10.29 35.50 19.25 35.50 19.25 35.50 Z M19.25 0.00 C8.63 0.00 0.00 8.64 0.00 19.25 C0.00 29.86 8.63 38.50 19.25 38.50 C29.86 38.50 38.50 29.86 38.50 19.25 C8.63 0.00 19.25 0.00 19.25 0.00 Z"
            }
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  path2: {
    top: "1.95%",
    left: "0.21%",
    width: "98.72%",
    height: "96.25%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
