import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, {
  Path,
  Stop,
  Defs,
  LinearGradient,
  Ellipse
} from "react-native-svg";
import { Center } from "@builderx/utils";
import MaterialCardWithImageAndTitle from "../symbols/MaterialCardWithImageAndTitle";
import MaterialIconTextbox2 from "../symbols/MaterialIconTextbox2";
import MaterialBasicFooter from "../symbols/MaterialBasicFooter";
import { Dimensions, Platform, PixelRatio, responsiveFontSize } from 'react-native';

export default class Airtime extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/BG-App.png")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <View style={styles.rect3} />
        <View style={styles.rect}>
          <Svg viewBox={"-0 -0 32 32"} style={styles.path}>
            <Path
              strokeWidth={0}
              fill={"rgba(21,22,48,1)"}
              fillOpacity={0.1}
              strokeOpacity={0.1}
              d={
                "M16.00 32.00 C24.84 32.00 32.00 24.84 32.00 16.00 C32.00 7.16 24.84 0.00 16.00 0.00 C7.16 0.00 0.00 7.16 0.00 16.00 C0.00 24.84 7.16 32.00 16.00 32.00 C24.84 32.00 16.00 32.00 16.00 32.00 Z"
              }
            />
          </Svg>
          <View style={styles.rect2}>
            <Svg viewBox={"-0 -0 20 15.40390625"} style={styles.path2}>
              <Path
                strokeWidth={0}
                fill={"rgba(255,255,255,1)"}
                d={
                  "M20.00 7.70 C20.00 8.15 19.19 8.51 19.19 8.51 L2.76 8.51 L8.27 14.02 C8.27 14.02 8.59 14.85 8.27 15.17 C8.12 15.32 7.91 15.40 7.70 15.40 C7.50 15.40 7.13 15.17 7.13 15.17 L0.24 8.27 C0.24 8.27 0.24 8.14 0.24 8.14 C0.10 8.01 0.00 7.86 0.00 7.70 C0.00 7.54 0.10 7.39 0.24 7.27 C0.24 7.27 0.24 7.13 0.24 7.13 L7.13 0.24 C7.13 0.24 7.96 -0.08 8.27 0.24 C8.59 0.55 8.27 1.38 8.27 1.38 L2.76 6.89 L19.19 6.89 C19.19 6.89 20.00 7.26 20.00 7.70 C20.00 8.15 20.00 7.70 20.00 7.70 Z"
                }
              />
            </Svg>
          </View>
        </View>
        <View style={styles.rect4} />
        <Center>
          <MaterialCardWithImageAndTitle
            style={styles.materialCardWithImageAndTitle}
          />
        </Center>
        <Text style={styles.text} />
        <Text style={styles.text2}>Available to Spend</Text>
        <Text style={styles.text3}>R500.00</Text>
        <MaterialIconTextbox2 style={styles.materialIconTextbox2} />
        <Text style={styles.text4}>Airtime Purchase</Text>
        <Image
          source={require("../assets/images/iconfinder_button_55_61426.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <MaterialBasicFooter style={styles.materialBasicFooter} />
        <View style={styles.rect5}>
          <Svg viewBox={"-0 -0 404 404"} style={styles.path3}>
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
          <Svg viewBox={"-0 -0 246 246"} style={styles.path4}>
            <Defs>
              <LinearGradient id="YtYHrg" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </LinearGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"url(#YtYHrg)"}
              d={
                "M123.00 246.00 C190.93 246.00 246.00 190.93 246.00 123.00 C246.00 55.07 190.93 0.00 123.00 0.00 C55.07 0.00 0.00 55.07 0.00 123.00 C0.00 190.93 55.07 246.00 123.00 246.00 C190.93 246.00 123.00 246.00 123.00 246.00 Z"
              }
            />
          </Svg>
        </View>
        <Svg viewBox={"0 0 11.19 11.19"} style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={5.59}
            cy={5.59}
            rx={5.59}
            ry={5.59}
          />
        </Svg>
        <Svg viewBox={"0 0 22.38 22.38"} style={styles.ellipse2}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={11.19}
            cy={11.19}
            rx={11.19}
            ry={11.19}
          />
        </Svg>
        <Svg viewBox={"0 0 12.79 12.79"} style={styles.ellipse3}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(153,133,190,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={6.39}
            cy={6.39}
            rx={5.89}
            ry={5.89}
          />
        </Svg>
        <Svg viewBox={"0 0 15.98 15.98"} style={styles.ellipse4}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(153,133,190,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={7.99}
            cy={7.99}
            rx={7.49}
            ry={7.49}
          />
        </Svg>
        <Svg viewBox={"0 0 11.19 11.19"} style={styles.ellipse5}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={5.59}
            cy={5.59}
            rx={5.59}
            ry={5.59}
          />
        </Svg>
        <Svg viewBox={"0 0 22.38 22.38"} style={styles.ellipse6}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={11.19}
            cy={11.19}
            rx={10.69}
            ry={10.69}
          />
        </Svg>
      </View>
    );
  }
}

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)",
    resizeMode: 'contain', // or 'stretch'
    width:SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  image2: {
    top: "-75.98%",
    left: "-59.67%",
    width: "50%",
    height: "50%",
    backgroundColor: "rgba(153,133,190,1)",
    position: "absolute",
    opacity: 0.95,
    resizeMode: 'stretch', // or 'stretch'

  },
  rect3: {
    resizeMode: 'stretch', // or 'stretch'
    top: 0,
    left: 0,
    width: "100%",
    height: "30%",
    backgroundColor: "rgba(198,164,244,1)",
    position: "absolute",
    opacity: 0.44,
    borderColor: "#000000",
    borderWidth: 1,
    shadowOpacity: 0.08
  },
  rect: {
    top: "4.63%",
    left: "5.28%",
    width: "8.53%",
    height: "3.94%",
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
  rect2: {
    top: "25.00%",
    left: "18.75%",
    width: "62.50%",
    height: "49.48%",
    position: "absolute"
  },
  path2: {
    top: "0.20%",
    left: "0.00%",
    width: "100.00%",
    height: "97.29%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rect4: {
    top: 180.46,
    left: 33.79,
    width: 308.36,
    height: 99.11,
    backgroundColor: "rgba(242,242,242,1)",
    position: "absolute",
    borderRadius: 19,
    borderColor: "rgba(191,191,191,1)",
    borderWidth: 1,
    shadowOpacity: 0.01,
    resizeMode: 'stretch' // or 'stretch'

  },
  materialCardWithImageAndTitle: {
    width: 359,
    height: 166,
    position: "absolute",
    borderColor: "rgba(214,214,214,1)",
    borderWidth: 1,
    shadowOpacity: 0.01
  },
  text: {
    top: 974.11,
    left: 171.25,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: 197.63,
    left: 143.01,
    color: "#121212",
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold"
  },
  text3: {
    top: 231.57,
    left: 143.01,
    color: "#121212",
    position: "absolute",
    fontSize: 30,
    fontWeight: "normal"
  },
  materialIconTextbox2: {
    top: 557.51,
    left: 11.53,
    width: 349.42,
    height: 46.23,
    position: "absolute"
  },
  text4: {
    top: 42.59,
    left: 72.35,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20
  },
  image: {
    top: 194.71,
    left: 51.79,
    width: 73.72,
    height: 73.72,
    position: "absolute"
  },
  materialBasicFooter: {
    top: 755.21,
    left: 0,
    width: 380.31,
    height: 56.79,
    position: "absolute",
    borderColor: "rgba(94,92,92,1)",
    borderWidth: 1,
    shadowOpacity: 0.01
  },
  rect5: {
    resizeMode: 'stretch', // or 'stretch'

    top: "89.84%",
    left: "36.26%",
    width: "127.47%",
    height: "49.88%",
    position: "absolute",
    opacity: 0.2
  },
  path3: {
    top: "0.14%",
    left: "15.48%",
    width: "84.52%",
    height: "99.75%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path4: {
    top: "10.37%",
    left: "0.00%",
    width: "51.46%",
    height: "60.74%",
    backgroundColor: "transparent",
    position: "absolute",
    transform: [
      {
        scaleY: -1
      }
    ],
    borderColor: "transparent"
  },
  ellipse: {
    top: 646.43,
    left: 96.13,
    width: 11.19,
    height: 11.19,
    position: "absolute"
  },
  ellipse2: {
    top: 668.81,
    left: 156.87,
    width: 22.38,
    height: 22.38,
    position: "absolute"
  },
  ellipse3: {
    top: 293.16,
    left: 263.97,
    width: 12.79,
    height: 12.79,
    position: "absolute"
  },
  ellipse4: {
    top: 269.57,
    left: 194.24,
    width: 15.98,
    height: 15.98,
    position: "absolute"
  },
  ellipse5: {
    top: 301.16,
    left: 150.47,
    width: 11.19,
    height: 11.19,
    position: "absolute"
  },
  ellipse6: {
    top: 668.81,
    left: 156.87,
    width: 22.38,
    height: 22.38,
    position: "absolute"
  }
});
