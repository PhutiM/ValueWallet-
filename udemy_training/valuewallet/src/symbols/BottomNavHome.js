import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, SvgImage } from "react-native-svg";
import UiBarsHomeIndicatorHomeIndicatorOnLight from "./UiBarsHomeIndicatorHomeIndicatorOnLight";

export default class BottomNavHome extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.group22}>
          <View style={styles.rectangle8} />
          <View style={styles.plus2}>
            <Svg viewBox={"-0 -0 44 44"} style={styles.oval5}>
              <Path
                strokeWidth={0}
                fill={"rgba(233,68,106,1)"}
                d={
                  "M22.00 44.00 C34.15 44.00 44.00 34.15 44.00 22.00 C44.00 9.85 34.15 0.00 22.00 0.00 C9.85 0.00 0.00 9.85 0.00 22.00 C0.00 34.15 9.85 44.00 22.00 44.00 C34.15 44.00 22.00 44.00 22.00 44.00 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 19.55555555555555 19.55555555555555"}
              style={styles.rectangle9}
            >
              <Path
                strokeWidth={0}
                fill={"rgba(255,253,253,1)"}
                d={
                  "M18.33 0.00 C13.54 0.00 11.09 2.35 9.85 4.75 C7.26 0.00 1.22 0.00 1.22 0.00 C1.22 0.00 18.33 0.00 18.33 0.00 C13.54 0.00 18.33 0.00 18.33 0.00 Z M9.71 14.81 C9.13 13.75 8.73 12.47 8.60 10.90 C7.63 10.77 6.18 10.45 4.75 9.71 C5.80 9.13 7.09 8.73 8.65 8.60 C8.79 7.63 9.11 6.18 9.85 4.75 C10.42 5.80 10.82 7.09 10.95 8.65 C11.93 8.79 13.37 9.11 14.81 9.85 C13.75 10.42 12.47 10.82 10.90 10.95 C10.77 11.93 10.45 13.37 9.71 14.81 C9.13 13.75 9.71 14.81 9.71 14.81 Z M9.71 14.81 C12.29 19.56 18.33 19.56 18.33 19.56 C18.33 19.56 1.22 19.56 1.22 19.56 C6.02 19.56 8.46 17.20 9.71 14.81 C12.29 19.56 9.71 14.81 9.71 14.81 Z M18.33 0.00 C18.33 0.00 18.33 0.00 18.33 0.00 C18.33 0.00 18.33 0.00 18.33 0.00 C18.33 0.00 18.33 0.00 18.33 0.00 Z M19.56 18.33 C19.56 13.54 17.20 11.09 14.81 9.85 C19.56 7.26 19.56 1.22 19.56 1.22 C19.56 1.22 19.56 18.33 19.56 18.33 C19.56 13.54 19.56 18.33 19.56 18.33 Z M4.75 9.71 C0.00 12.29 0.00 18.33 0.00 18.33 C0.00 18.33 0.00 1.22 0.00 1.22 C0.00 6.02 2.35 8.46 4.75 9.71 C0.00 12.29 4.75 9.71 4.75 9.71 Z"
                }
              />
            </Svg>
          </View>
          <UiBarsHomeIndicatorHomeIndicatorOnLight
            style={styles.uiBarsHomeIndicatorHomeIndicatorOnLight2}
          />
          <View style={styles.group2}>
            <View style={styles.rectangleCopy62} />
            <Image
              viewBox={"0 0 26 26"}
              svgDims={{
                x: "0",
                y: "0",
                height: "26",
                width: "26"
              }}
              style={styles.mask2}
            />
          </View>
          <View style={styles.group72}>
            <View style={styles.rectangle10} />
            <View style={styles.homeIconSilhouette2}>
              <Svg
                viewBox={"-0 -0 25.96843699618937 13.26754636462198"}
                style={styles.path15}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M25.53 10.76 C21.60 6.89 21.60 6.89 21.60 6.89 L21.60 2.41 C21.60 1.60 20.93 0.94 20.11 0.94 C19.29 0.94 18.62 1.60 18.62 2.41 L18.62 3.96 L15.69 1.07 C14.24 -0.36 11.72 -0.36 10.28 1.07 L0.44 10.76 C-0.15 11.34 -0.15 12.27 0.44 12.84 C1.02 13.41 1.96 13.41 2.54 12.84 L12.38 3.14 C12.70 2.83 13.27 2.83 13.59 3.14 L23.43 12.84 C23.72 13.12 24.10 13.27 24.48 13.27 C24.86 13.27 25.24 13.12 25.53 12.84 C26.11 12.27 26.11 11.34 25.53 10.76 L25.53 10.76 Z"
                  }
                />
              </Svg>
              <Svg
                viewBox={"-0 -0 18.77278629032257 18.10322711717379"}
                style={styles.path16}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M9.90 0.21 C9.62 -0.07 9.15 -0.07 8.87 0.21 L0.21 8.73 C0.08 8.87 0.00 9.05 0.00 9.24 L0.00 15.46 C0.00 16.92 1.20 18.10 2.68 18.10 L6.97 18.10 L6.97 11.57 L11.81 11.57 L11.81 18.10 L16.09 18.10 C17.57 18.10 18.77 16.92 18.77 15.46 L18.77 9.24 C18.77 9.05 18.70 8.87 18.56 8.73 L9.90 0.21 C9.62 -0.07 9.90 0.21 9.90 0.21 Z"
                  }
                />
              </Svg>
            </View>
          </View>
          <View style={styles.group92}>
            <View style={styles.rectangleCopy42} />
            <View style={styles.notification2}>
              <Svg
                viewBox={"-0 -0 21.1183615542063 22.67917834890965"}
                style={styles.path17}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M21.04 21.86 C19.23 18.77 19.23 18.77 19.23 18.77 C18.39 17.34 17.95 15.71 17.95 14.05 L17.95 11.34 C17.95 7.92 15.72 5.03 12.67 4.10 L12.67 2.16 C12.67 0.97 11.72 0.00 10.56 0.00 C9.39 0.00 8.45 0.97 8.45 2.16 L8.45 4.10 C5.40 5.03 3.17 7.92 3.17 11.34 L3.17 14.05 C3.17 15.71 2.72 17.34 1.89 18.77 L0.08 21.86 C-0.02 22.03 -0.03 22.24 0.07 22.40 C0.16 22.57 0.34 22.68 0.53 22.68 L20.59 22.68 C20.78 22.68 20.96 22.57 21.05 22.41 C21.14 22.24 21.14 22.03 21.04 21.86 L21.04 21.86 Z"
                  }
                />
              </Svg>
              <Svg
                viewBox={"-0 -0 6.650415714780197 2.159933800623062"}
                style={styles.path18}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M0.00 0.00 C0.60 1.27 1.86 2.16 3.33 2.16 C4.79 2.16 6.05 1.27 6.65 0.00 L0.00 0.00 L0.00 0.00 C0.60 1.27 0.00 0.00 0.00 0.00 Z"
                  }
                />
              </Svg>
            </View>
          </View>
          <View style={styles.rectangle11} />
          <View style={styles.group82}>
            <View style={styles.rectangleCopy72} />
            <View style={styles.sms2}>
              <Svg
                viewBox={"-0 -0 18.4516129032258 15.23368578255674"}
                style={styles.path19}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M16.64 0.00 C15.94 0.00 15.94 0.00 15.94 0.00 L15.94 7.91 C15.94 9.14 15.23 10.25 13.82 10.25 L0.00 10.25 L0.00 10.63 C0.00 11.71 1.22 12.81 2.46 12.81 L13.03 12.81 L17.07 15.23 L16.49 12.81 L16.64 12.81 C17.89 12.81 18.45 11.72 18.45 10.63 L18.45 1.88 C18.45 0.79 17.89 0.00 16.64 0.00 L16.64 0.00 Z"
                  }
                />
              </Svg>
              <Svg
                viewBox={"-0 -0 21.80645161290322 17.82289127837515"}
                style={styles.path20}
              >
                <Path
                  strokeWidth={0}
                  fill={"rgba(22,31,61,1)"}
                  d={
                    "M21.81 2.51 C21.81 12.42 21.81 12.42 21.81 12.42 L19.09 14.52 L7.35 14.52 L1.84 17.82 L2.70 14.50 L0.00 12.42 L0.00 2.51 L3.04 0.00 L19.09 0.00 L21.81 2.51 L21.81 2.51 Z M6.94 6.89 C6.94 6.07 6.29 5.41 5.49 5.41 C4.69 5.41 4.04 6.07 4.04 6.89 C4.04 7.70 4.69 8.36 5.49 8.36 C6.29 8.36 6.94 7.70 6.94 6.89 C6.94 6.07 6.94 6.89 6.94 6.89 Z M12.35 6.89 C12.35 6.07 11.70 5.41 10.90 5.41 C10.10 5.41 9.45 6.07 9.45 6.89 C9.45 7.70 10.10 8.36 10.90 8.36 C11.70 8.36 12.35 7.70 12.35 6.89 C12.35 6.07 12.35 6.89 12.35 6.89 Z M17.77 6.89 C17.77 6.07 17.12 5.41 16.32 5.41 C15.52 5.41 14.87 6.07 14.87 6.89 C14.87 7.70 15.52 8.36 16.32 8.36 C17.12 8.36 17.77 7.70 17.77 6.89 C17.77 6.07 17.77 6.89 17.77 6.89 Z"
                  }
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group22: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute"
  },
  rectangle8: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    shadowOffset: {
      height: -3,
      width: 0
    },
    shadowColor: "rgba(165,165,165,0.07)",
    shadowOpacity: 1,
    shadowRadius: 15
  },
  plus2: {
    top: "9.78%",
    left: "44.27%",
    width: "11.73%",
    height: "47.83%",
    position: "absolute"
  },
  oval5: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle9: {
    top: "27.78%",
    left: "27.78%",
    width: 19.56,
    height: 19.56,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  uiBarsHomeIndicatorHomeIndicatorOnLight2: {
    top: "63.04%",
    left: "0.00%",
    width: "100.00%",
    height: "36.96%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  group2: {
    top: "19.57%",
    left: "85.07%",
    width: "6.93%",
    height: "28.26%",
    position: "absolute"
  },
  rectangleCopy62: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  mask2: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "rgba(22,31,61,0.1)",
    borderWidth: 1
  },
  group72: {
    top: "19.57%",
    left: "8.00%",
    width: "6.93%",
    height: "28.26%",
    position: "absolute",
    opacity: 0.9
  },
  rectangle10: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  homeIconSilhouette2: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "92.59%",
    position: "absolute"
  },
  path15: {
    top: "0.01%",
    left: "0.00%",
    width: "99.88%",
    height: "55.11%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path16: {
    top: "23.75%",
    left: "13.84%",
    width: "72.20%",
    height: "75.20%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  group92: {
    top: "19.57%",
    left: "66.93%",
    width: "6.93%",
    height: "28.26%",
    position: "absolute",
    opacity: 0.3
  },
  rectangleCopy42: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  notification2: {
    top: "0.00%",
    left: "7.69%",
    width: "81.48%",
    height: "100.00%",
    position: "absolute"
  },
  path17: {
    top: "0.00%",
    left: "0.16%",
    width: "99.68%",
    height: "87.23%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path18: {
    top: "91.38%",
    left: "34.30%",
    width: "31.39%",
    height: "8.31%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle11: {
    top: "-0.00%",
    left: "4.80%",
    width: "13.33%",
    height: "3.26%",
    backgroundColor: "rgba(233,68,106,1)",
    position: "absolute",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100
  },
  group82: {
    top: "19.57%",
    left: "26.13%",
    width: "6.93%",
    height: "28.26%",
    position: "absolute",
    opacity: 0.3
  },
  rectangleCopy72: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "transparent",
    position: "absolute"
  },
  sms2: {
    top: "7.69%",
    left: "0.00%",
    width: "100.00%",
    height: "81.48%",
    position: "absolute"
  },
  path19: {
    top: "26.90%",
    left: "28.20%",
    width: "70.97%",
    height: "71.91%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path20: {
    top: "0.97%",
    left: "0.00%",
    width: "83.87%",
    height: "84.13%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
