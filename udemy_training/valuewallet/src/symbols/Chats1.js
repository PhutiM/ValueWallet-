import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Chats1 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.communication}>
          <Svg viewBox={"-0 -0 34 34"} style={styles.path}>
            <Path
              strokeWidth={0}
              fill={"rgba(193,193,193,1)"}
              d={
                "M34.00 17.00 C34.00 21.54 32.23 25.81 29.02 29.02 C25.74 32.30 21.38 34.00 16.98 34.00 C14.25 34.00 11.48 33.34 8.96 31.98 C6.70 33.61 4.48 33.96 2.98 33.96 C2.42 33.96 1.96 33.91 1.64 33.86 C0.95 33.76 0.41 33.22 0.31 32.53 C0.20 31.84 0.55 31.17 1.18 30.86 C2.48 30.22 3.35 28.94 3.90 27.84 C-1.67 21.13 -1.24 11.19 4.97 4.98 C8.19 1.77 12.45 0.00 16.99 0.00 C21.53 0.00 25.80 1.77 29.01 4.98 C32.22 8.19 34.00 12.46 34.00 17.00 C34.00 21.54 34.00 17.00 34.00 17.00 Z M27.63 6.35 C21.76 0.48 12.21 0.48 6.34 6.35 C0.72 11.98 0.44 21.03 5.71 26.98 C5.84 27.14 5.92 27.33 5.94 27.52 C5.99 27.72 5.98 27.94 5.89 28.15 C5.35 29.38 2.97 32.02 2.97 32.02 L2.98 32.02 C2.98 32.02 6.16 31.71 8.11 30.20 C8.13 30.18 8.16 30.15 8.19 30.14 C8.49 29.83 8.98 29.76 9.36 29.99 C15.27 33.46 22.79 32.50 27.64 27.65 C33.51 21.77 33.51 12.23 27.63 6.35 C21.76 0.48 27.63 6.35 27.63 6.35 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 2 2"} style={styles.oval}>
            <Path
              strokeWidth={0}
              fill={"rgba(193,193,193,1)"}
              d={
                "M1.00 2.00 C1.55 2.00 2.00 1.55 2.00 1.00 C2.00 0.45 1.55 0.00 1.00 0.00 C0.45 0.00 0.00 0.45 0.00 1.00 C0.00 1.55 0.45 2.00 1.00 2.00 C1.55 2.00 1.00 2.00 1.00 2.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 2 2"} style={styles.oval1}>
            <Path
              strokeWidth={0}
              fill={"rgba(193,193,193,1)"}
              d={
                "M1.00 2.00 C1.55 2.00 2.00 1.55 2.00 1.00 C2.00 0.45 1.55 0.00 1.00 0.00 C0.45 0.00 0.00 0.45 0.00 1.00 C0.00 1.55 0.45 2.00 1.00 2.00 C1.55 2.00 1.00 2.00 1.00 2.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 2 2"} style={styles.oval2}>
            <Path
              strokeWidth={0}
              fill={"rgba(193,193,193,1)"}
              d={
                "M1.00 2.00 C1.55 2.00 2.00 1.55 2.00 1.00 C2.00 0.45 1.55 0.00 1.00 0.00 C0.45 0.00 0.00 0.45 0.00 1.00 C0.00 1.55 0.45 2.00 1.00 2.00 C1.55 2.00 1.00 2.00 1.00 2.00 Z"
              }
            />
          </Svg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  communication: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  path: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval: {
    top: "47.06%",
    left: "47.06%",
    width: "5.88%",
    height: "5.88%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval1: {
    top: "47.06%",
    left: "64.71%",
    width: "5.88%",
    height: "5.88%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  oval2: {
    top: "47.06%",
    left: "29.41%",
    width: "5.88%",
    height: "5.88%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
