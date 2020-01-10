import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import Svg,{
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import MaterialButtonPurple from "../symbols/MaterialButtonPurple";
import MaterialButtonPurple1 from "../symbols/MaterialButtonPurple1";
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';



export default class Signup extends Component {
 
  
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/images/BG-App.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <View style={styles.rect} />
        <View style={styles.blobBg}>
          <Svg viewBox={"-0 -0 376 376"} style={styles.oval}>
            <Defs>
              <RadialGradient id="rybpb5" x1={50} x2={50} y1={0} y2={100}>
                <Stop offset="0.00" stopColor="rgba(246,121,163,1)" />
                <Stop offset="1.00" stopColor="rgba(233,68,106,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(190,171,226,1)"}
              d={
                "M188.00 376.00 C214.37 376.00 239.48 370.57 262.26 360.76 C329.16 331.97 376.00 265.46 376.00 188.00 C376.00 84.17 291.83 0.00 188.00 0.00 C84.17 0.00 0.00 84.17 0.00 188.00 C0.00 291.83 84.17 376.00 188.00 376.00 C214.37 376.00 188.00 376.00 188.00 376.00 Z"
              }
            />
          </Svg>
      
          <Svg viewBox={"-0 -0 4 4"} style={styles.ovalCopy4}>
            <Defs>
              <RadialGradient id="ehBvZZ" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(144,19,254,1)"}
              d={
                "M2.00 4.00 C3.10 4.00 4.00 3.10 4.00 2.00 C4.00 0.90 3.10 0.00 2.00 0.00 C0.90 0.00 0.00 0.90 0.00 2.00 C0.00 3.10 0.90 4.00 2.00 4.00 C3.10 4.00 2.00 4.00 2.00 4.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 8 8"} style={styles.ovalCopy7}>
            <Defs>
              <RadialGradient id="KMkJOf" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M4.00 8.00 C6.21 8.00 8.00 6.21 8.00 4.00 C8.00 1.79 6.21 0.00 4.00 0.00 C1.79 0.00 0.00 1.79 0.00 4.00 C0.00 6.21 1.79 8.00 4.00 8.00 C6.21 8.00 4.00 8.00 4.00 8.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 7 7"} style={styles.ovalCopy5}>
            <Defs>
              <LinearGradient id="GXHvEO" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </LinearGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(0,0,0,1)"}
              d={
                "M3.50 7.00 C5.43 7.00 7.00 5.43 7.00 3.50 C7.00 1.57 5.43 0.00 3.50 0.00 C1.57 0.00 0.00 1.57 0.00 3.50 C0.00 5.43 1.57 7.00 3.50 7.00 C5.43 7.00 3.50 7.00 3.50 7.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 4 4"} style={styles.ovalCopy8}>
            <Defs>
              <RadialGradient id="KgLTYh" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(144,19,254,1)"}
              d={
                "M2.00 4.00 C3.10 4.00 4.00 3.10 4.00 2.00 C4.00 0.90 3.10 0.00 2.00 0.00 C0.90 0.00 0.00 0.90 0.00 2.00 C0.00 3.10 0.90 4.00 2.00 4.00 C3.10 4.00 2.00 4.00 2.00 4.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 10 10"} style={styles.ovalCopy6}>
            <Defs>
              <RadialGradient id="AFBmU2" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(153,133,190,1)"}
              d={
                "M5.00 10.00 C7.76 10.00 10.00 7.76 10.00 5.00 C10.00 2.24 7.76 0.00 5.00 0.00 C2.24 0.00 0.00 2.24 0.00 5.00 C0.00 7.76 2.24 10.00 5.00 10.00 C7.76 10.00 5.00 10.00 5.00 10.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 6 6"} style={styles.ovalCopy9}>
            <Defs>
              <RadialGradient id="rkWsah" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"rgba(144,19,254,1)"}
              d={
                "M3.00 6.00 C4.66 6.00 6.00 4.66 6.00 3.00 C6.00 1.34 4.66 0.00 3.00 0.00 C1.34 0.00 0.00 1.34 0.00 3.00 C0.00 4.66 1.34 6.00 3.00 6.00 C4.66 6.00 3.00 6.00 3.00 6.00 Z"
              }
            />
          </Svg>
        </View>
        <Text style={styles.helloAgain}>
          Welcome to the {"\n"}Value Wallet App
        </Text>
        
        <View style={styles.bottomBlob}>
          <Svg viewBox={"-0 -0 404 404"} style={styles.oval2}>
            <Defs>
              <RadialGradient id="EMobc8" x1={50} x2={50} y1={0} y2={100}>
                <Stop offset="0.00" stopColor="rgba(246,121,163,1)" />
                <Stop offset="1.00" stopColor="rgba(233,68,106,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"url(#EMobc8)"}
              d={
                "M202.00 404.00 C313.56 404.00 404.00 313.56 404.00 202.00 C404.00 90.44 313.56 0.00 202.00 0.00 C90.44 0.00 0.00 90.44 0.00 202.00 C0.00 313.56 90.44 404.00 202.00 404.00 C313.56 404.00 202.00 404.00 202.00 404.00 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 246 246"} style={styles.ovalCopy1}>
            <Defs>
              <RadialGradient id="C49AWx" x1={50} x2={50} y1={0} y2={97}>
                <Stop offset="0.00" stopColor="rgba(246,220,121,1)" />
                <Stop offset="1.00" stopColor="rgba(255,158,123,1)" />
              </RadialGradient>
            </Defs>
            <Path
              strokeWidth={0}
              fill={"url(#C49AWx)"}
              d={
                "M123.00 246.00 C190.93 246.00 246.00 190.93 246.00 123.00 C246.00 55.07 190.93 0.00 123.00 0.00 C55.07 0.00 0.00 55.07 0.00 123.00 C0.00 190.93 55.07 246.00 123.00 246.00 C190.93 246.00 123.00 246.00 123.00 246.00 Z"
              }
            />
          </Svg>
        </View>
        <View style={styles.buttons} >
        <MaterialButtonPurple style={styles.materialButtonPurple} text="LOGIN" color="#fff" navigation={() => this.props.navigation.navigate('Details')} />
        <MaterialButtonPurple style={styles.materialButtonPurple1} color="#fff" text="REGISTER"/>
        </View>
        <Image
          source={require("../assets/images/VWCI-01.png")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <Text style={styles.text2}>
          Accountability &amp; Intergrity trhough Technology
        </Text>
  
        <Svg viewBox={"0 0 9.24 9.24"} style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            cx={4.62}
            cy={4.62}
            rx={4.12}
            ry={4.12}
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

var textFontSize = SCREEN_WIDTH * 0.13;

var textTagFontSize = SCREEN_WIDTH * 0.04;


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT

  },
  image: {
  
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.95,
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'

  },
  rect: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(153,133,190,1)",
    position: "absolute",
    opacity: 0.35,
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'

  },
  blobBg: {
    top: "-21.66%",
    left: "-11.67%",
    width: "144.53%",
    height: "46.55%",
    position: "absolute",
    opacity: 0.79
  },
  
  ovalCopy: {
    top: "10.56%",
    left: "0%",
    width: "63.54%",
    height: "62.43%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy4: {
    top: "87.83%",
    left: "53.51%",
    width: "4.74%",
    height: "1.06%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy7: {
    top: "94.65%",
    left: "37.52%",
    width: "4.48%",
    height: "5.12%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy5: {
    top: "80.95%",
    left: "56.46%",
    width: "4.29%",
    height: "4.85%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy8: {
    top: "82.80%",
    left: "29.89%",
    width: "1.74%",
    height: "2.06%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy6: {
    top: "95.23%",
    left: "58.86%",
    width: "2.85%",
    height: "4.65%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy9: {
    top: "98.41%",
    left: "27.12%",
    width: "2.11%",
    height: "2.59%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  helloAgain: {
    top: "50.31%",
    left: "6.35%",
    backgroundColor: "transparent",
    color: "rgba(233,233,233,1)",
    position: "absolute",
    opacity: 0.7,
    width: '100%',
    fontSize: textFontSize,
  //  fontSize: RFPercentage(5),
    fontFamily: "montserrat-medium",
//    lineHeight: 40,
    textAlign: "left"
  },
  bottomBlob: {
    top: "91.26%",
    left: "36.27%",
    width: "127.47%",
    height: "49.88%",
    position: "absolute",
    opacity: 0.2,
  },
  oval2: {
    top: "0.14%",
    left: "15.48%",
    width: "84.52%",
    height: "99.75%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  ovalCopy1: {
    top: "10.37%",
    left: "0%",
    width: "51.46%",
    height: "60.74%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  materialButtonPurple: {
    top: 538.21,
    left: "5%",
    width: "45%",
    height: 49.33,
    position: "absolute",
   
    borderWidth: 1
  },
    
  materialButtonPurple1: {
    top: 538.21,
    backgroundColor: "rgba(155,133,190,1)",
    left: "52%",
    width: "45%",
    height: 49.33,
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 1
  },
  buttons:{
    flex: 1,
    width: "100%",

  },
  image2: {
    flex:1,
    top: "12%",
    left: "5.68%",
    width: "90%",
    height: "40%",
    position: "absolute"
  },
  text: {
    top: 644.83,
    left: 512.35,
    color: "#121212",
    position: "absolute"
  },
  text2: {
    top: "36%",
    left: 39.48,
    fontSize: textTagFontSize,
    color: "rgba(244,244,244,1)",
    position: "absolute",
    textAlign: "center",
  },
  ellipse: {
    top: 361.24,
    left: 72.6,
    width: 9.24,
    height: 9.24,
    position: "absolute"
  }
});
