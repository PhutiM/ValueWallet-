import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialFixedLabelTextbox from "./MaterialFixedLabelTextbox";
import Svg, { Stop, Defs, LinearGradient, Path } from "react-native-svg";

export default class MaterialCardWithImageAndTitle extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../assets/images/vodafone_416x4161.jpg")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <Text style={styles.text}>Vodacom</Text>
        <Text style={styles.text2}>Airtime Topup</Text>
        <Text style={styles.text3}>Own amount from R2.00 to Balance</Text>
        <View style={styles.rect} />
        <View style={styles.rect2} />
        <Text style={styles.text4}>R</Text>
        <MaterialFixedLabelTextbox style={styles.materialFixedLabelTextbox} />
        <View style={styles.rect3}>
          <Svg viewBox={"-0 -0 404 404"} style={styles.path}>
            <Defs>
              <LinearGradient id="FX0Q1j" x1={50} x2={50} y1={0} y2={100}>
                <Stop offset="0.00" stopColor="rgba(246,121,163,1)" />
                <Stop offset="1.00" stopColor="rgba(233,68,106,1)" />
              </LinearGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"url(#FX0Q1j)"}
              d={
                "M202.00 404.00 C313.56 404.00 404.00 313.56 404.00 202.00 C404.00 90.44 313.56 0.00 202.00 0.00 C90.44 0.00 0.00 90.44 0.00 202.00 C0.00 313.56 90.44 404.00 202.00 404.00 C313.56 404.00 202.00 404.00 202.00 404.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 246 246"} style={styles.path2}>
            <Defs>
              <LinearGradient id="YtYHrg" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </LinearGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(209,95,244,1)"}
              d={
                "M123.00 246.00 C123.00 246.00 246.00 190.93 246.00 123.00 C246.00 55.07 190.93 0.00 123.00 0.00 C55.07 0.00 0.00 55.07 0.00 123.00 C0.00 190.93 55.07 246.00 123.00 246.00 C190.93 246.00 123.00 246.00 123.00 246.00 Z"
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
    flex: 1,
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 0,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  image2: {
    top: 14,
    left: 7.49,
    width: 91,
    height: 91,
    position: "absolute",
    borderRadius: 8,
    borderColor: "rgba(203,203,203,1)",
    borderWidth: 1
  },
  text: {
    top: 12.5,
    left: 113.62,
    color: "#121212",
    position: "absolute",
    fontSize: 41,
    fontWeight: "bold"
  },
  text2: {
    top: 64,
    left: 122.16,
    color: "#121212",
    position: "absolute",
    fontSize: 14
  },
  text3: {
    top: 87,
    left: 122.62,
    color: "#121212",
    position: "absolute",
    fontSize: 12
  },
  rect: {
    top: 116,
    left: -1,
    width: 72,
    height: 51,
    backgroundColor: "rgba(153,133,190,1)",
    position: "absolute"
  },
  rect2: {
    top: 116,
    left: 72,
    width: 287,
    height: 51,
    backgroundColor: "rgba(153,133,190,1)",
    position: "absolute"
  },
  text4: {
    top: 120,
    left: 19.05,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold"
  },
  materialFixedLabelTextbox: {
    top: 118.5,
    left: 75,
    width: 284,
    height: 43,
    position: "absolute"
  },
  rect3: {
    top: "82.04%",
    left: "36.26%",
    width: "127.47%",
    height: "49.88%",
    position: "absolute",
    opacity: 0.2
  },
  path: {
    top: "0.14%",
    left: "15.48%",
    width: "84.52%",
    height: "99.75%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path2: {
    top: "10.37%",
    left: "0%",
    width: "51.46%",
    height: "60.74%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
