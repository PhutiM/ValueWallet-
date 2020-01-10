import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class ExtensionsKeyboardsLightReturn extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.background} />
        <View style={styles.keyboard}>
          <View style={styles.return}>
            <View style={styles.key} />
            <Text style={styles.return1}>return</Text>
          </View>
          <View style={styles.space}>
            <View style={styles.key1} />
            <Text style={styles.space1}>space</Text>
          </View>
          <View style={styles.style1}>
            <View style={styles.key2} />
            <Text style={styles.style2}>123</Text>
          </View>
          <View style={styles.backspace}>
            <View style={styles.key3} />
            <Svg viewBox={"-0.5 -0.5 24 18"} style={styles.path1}>
              <Path
                strokeWidth={1}
                fill={"transparent"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M22.00 2.07 C22.00 13.93 22.00 13.93 22.00 13.93 C22.00 15.07 21.10 16.00 20.00 16.00 L8.00 16.00 L0.00 8.00 L8.00 0.00 L20.00 0.00 C21.11 0.00 22.00 0.93 22.00 2.07 L22.00 2.07 Z"
                }
              />
            </Svg>
            <Svg
              viewBox={"-0 -0 7.778174593051972 7.778174593052029"}
              style={styles.path2}
            >
              <Path
                strokeWidth={0}
                fill={"rgba(0,0,0,1)"}
                d={
                  "M3.89 3.18 C0.71 0.00 0.71 0.00 0.71 0.00 L0.00 0.71 L3.18 3.89 L0.00 7.07 L0.71 7.78 L3.89 4.60 L7.07 7.78 L7.78 7.07 L4.60 3.89 L7.78 0.71 L7.07 0.00 L3.89 3.18 L3.89 3.18 L3.89 3.18 Z"
                }
              />
            </Svg>
          </View>
          <View style={styles.m}>
            <View style={styles.key4} />
            <Text style={styles.l}>m</Text>
          </View>
          <View style={styles.n}>
            <View style={styles.key5} />
            <Text style={styles.k}>n</Text>
          </View>
          <View style={styles.b}>
            <View style={styles.key6} />
            <Text style={styles.j}>b</Text>
          </View>
          <View style={styles.v}>
            <View style={styles.key7} />
            <Text style={styles.h}>v</Text>
          </View>
          <View style={styles.c}>
            <View style={styles.key8} />
            <Text style={styles.g}>c</Text>
          </View>
          <View style={styles.x}>
            <View style={styles.key9} />
            <Text style={styles.f}>x</Text>
          </View>
          <View style={styles.z}>
            <View style={styles.key10} />
            <Text style={styles.d}>z</Text>
          </View>
          <View style={styles.shift}>
            <View style={styles.key11} />
            <Svg
              viewBox={"-0.5 -0.5 20.57035412107317 17.52430230391679"}
              style={styles.path2458}
            >
              <Path
                strokeWidth={1}
                fill={"transparent"}
                stroke={"rgba(0,0,0,1)"}
                d={
                  "M13.64 9.36 C18.06 9.37 18.06 9.37 18.06 9.37 C18.61 9.37 18.73 9.05 18.34 8.66 L9.98 0.29 C9.58 -0.10 8.95 -0.10 8.56 0.30 L0.23 8.63 C-0.17 9.02 -0.03 9.34 0.52 9.34 L4.64 9.34 L4.64 13.52 C4.64 14.63 5.54 15.52 6.64 15.52 L11.65 15.52 C12.75 15.52 13.64 14.63 13.64 13.52 L13.64 9.36 L13.64 9.36 L13.64 9.36 Z"
                }
              />
            </Svg>
          </View>
          <View style={styles.l1}>
            <View style={styles.key12} />
            <Text style={styles.l2}>l</Text>
          </View>
          <View style={styles.k1}>
            <View style={styles.key13} />
            <Text style={styles.k2}>k</Text>
          </View>
          <View style={styles.j1}>
            <View style={styles.key14} />
            <Text style={styles.j2}>j</Text>
          </View>
          <View style={styles.h1}>
            <View style={styles.key15} />
            <Text style={styles.h2}>h</Text>
          </View>
          <View style={styles.g1}>
            <View style={styles.key16} />
            <Text style={styles.g2}>g</Text>
          </View>
          <View style={styles.f1}>
            <View style={styles.key17} />
            <Text style={styles.f2}>f</Text>
          </View>
          <View style={styles.d1}>
            <View style={styles.key18} />
            <Text style={styles.d2}>d</Text>
          </View>
          <View style={styles.s}>
            <View style={styles.key19} />
            <Text style={styles.s1}>s</Text>
          </View>
          <View style={styles.a}>
            <View style={styles.key20} />
            <Text style={styles.a1}>a</Text>
          </View>
          <View style={styles.p}>
            <View style={styles.key21} />
            <Text style={styles.p1}>p</Text>
          </View>
          <View style={styles.o}>
            <View style={styles.key22} />
            <Text style={styles.o1}>o</Text>
          </View>
          <View style={styles.i}>
            <View style={styles.key23} />
            <Text style={styles.i1}>i</Text>
          </View>
          <View style={styles.u}>
            <View style={styles.key24} />
            <Text style={styles.u1}>u</Text>
          </View>
          <View style={styles.y}>
            <View style={styles.key25} />
            <Text style={styles.y1}>y</Text>
          </View>
          <View style={styles.t}>
            <View style={styles.key26} />
            <Text style={styles.t1}>t</Text>
          </View>
          <View style={styles.r}>
            <View style={styles.key27} />
            <Text style={styles.r1}>r</Text>
          </View>
          <View style={styles.e}>
            <View style={styles.key28} />
            <Text style={styles.e1}>e</Text>
          </View>
          <View style={styles.w}>
            <View style={styles.key29} />
            <Text style={styles.w1}>w</Text>
          </View>
          <View style={styles.q}>
            <View style={styles.key30} />
            <Text style={styles.q1}>q</Text>
          </View>
          <Svg
            viewBox={"-0 -0 15.00000560866636 24.99739543195544"}
            style={styles.dictationPath}
          >
            <Path
              strokeWidth={0}
              fill={"rgba(80,85,92,1)"}
              d={
                "M14.99 13.28 C8.33 20.79 8.33 20.79 8.33 20.79 L8.33 23.32 L11.47 23.32 C11.47 23.32 11.47 23.33 11.47 23.33 C11.48 23.33 11.49 23.33 11.50 23.33 C11.96 23.33 12.33 23.70 12.33 24.16 C12.33 24.62 11.96 25.00 11.50 25.00 C11.49 25.00 11.48 25.00 11.47 25.00 C11.47 25.00 11.47 25.00 11.47 25.00 L3.53 25.00 C3.53 25.00 3.53 25.00 3.53 25.00 C3.52 25.00 3.51 25.00 3.50 25.00 C3.04 25.00 2.67 24.62 2.67 24.16 C2.67 23.70 3.50 23.33 3.50 23.33 C3.50 23.33 3.51 23.34 3.53 23.34 C3.53 23.34 3.53 23.32 3.53 23.32 L6.68 23.32 L6.68 20.79 C6.68 20.79 0.00 17.12 0.00 13.28 C0.00 13.24 0.01 13.18 0.01 13.18 C0.01 13.18 0.01 11.27 0.01 11.27 C0.00 11.23 0.00 11.20 0.00 11.16 C0.00 10.70 0.37 10.33 0.83 10.33 C1.29 10.33 1.67 10.70 1.67 11.16 C1.67 11.19 1.67 11.22 1.66 11.25 C1.66 11.25 1.66 13.54 1.66 13.54 L1.66 13.54 L1.66 13.55 L1.66 13.64 L1.66 13.95 L1.68 13.95 C1.68 13.95 3.76 15.94 3.76 15.94 C4.04 16.37 4.40 16.75 4.82 17.06 C4.97 17.18 5.12 17.29 5.29 17.39 C5.29 17.39 7.32 19.33 7.32 19.33 L7.66 19.33 C7.66 19.33 9.68 17.40 9.68 17.40 C9.85 17.30 10.02 17.19 10.18 17.06 C10.60 16.75 10.96 16.36 11.24 15.92 C11.24 15.92 13.31 13.95 13.31 13.95 L13.33 13.95 L13.33 11.17 C13.33 11.17 13.33 11.17 13.33 11.17 C13.33 11.17 13.33 11.17 13.33 11.16 C13.33 10.70 13.71 10.33 14.17 10.33 C14.63 10.33 15.00 10.70 15.00 11.16 C15.00 11.19 15.00 11.21 15.00 11.24 C15.00 11.24 15.00 13.28 15.00 13.28 L14.99 13.28 L14.99 13.28 Z M11.99 11.88 C11.99 11.88 11.99 12.91 11.97 13.41 C11.95 13.87 11.88 14.32 11.76 14.76 C11.64 15.17 11.47 15.56 11.24 15.92 C11.24 15.92 9.68 17.40 9.68 17.40 C8.33 18.20 6.64 18.19 5.29 17.39 C5.29 17.39 3.76 15.94 3.76 15.94 C3.53 15.57 3.35 15.18 3.23 14.76 C3.12 14.32 3.05 13.87 3.03 13.41 C3.00 12.91 3.00 11.88 3.00 11.88 L3.00 7.66 C3.00 7.66 3.00 4.95 3.00 4.58 C3.01 4.12 3.09 3.67 3.23 3.24 C3.77 1.32 5.51 0.00 7.50 0.00 C9.48 0.00 11.23 1.32 11.76 3.24 C11.89 3.68 11.96 4.13 11.99 4.58 C12.02 5.08 11.99 7.66 11.99 7.66 L11.99 11.88 L11.99 11.88 C11.99 11.88 11.99 11.88 11.99 11.88 Z M10.33 4.59 C10.31 4.30 10.25 4.01 10.17 3.73 C10.01 3.14 9.66 2.62 9.18 2.24 C8.19 1.48 6.81 1.48 5.82 2.24 C5.33 2.62 4.98 3.14 4.82 3.73 C4.75 4.01 4.70 4.30 4.68 4.59 C4.65 4.94 4.67 8.23 4.67 12.66 C4.67 12.98 4.68 13.09 4.69 13.41 C4.71 13.70 4.75 13.99 4.82 14.27 C4.98 14.86 5.33 15.38 5.82 15.76 C6.81 16.53 8.19 16.53 9.18 15.76 C9.66 15.38 10.01 14.86 10.17 14.27 C10.24 13.99 10.29 13.70 10.30 13.41 C10.32 13.09 10.33 12.98 10.33 12.66 C10.33 8.22 10.35 4.97 10.33 4.59 C10.31 4.30 10.33 4.59 10.33 4.59 Z"
              }
            />
          </Svg>
          <Svg viewBox={"-0 -0 26.5 26.5"} style={styles.emojiPath}>
            <Path
              strokeWidth={0}
              fill={"rgba(80,85,92,1)"}
              d={
                "M13.25 0.00 C20.57 0.00 26.50 5.93 26.50 13.25 C26.50 20.57 20.57 26.50 13.25 26.50 C5.93 26.50 0.00 20.57 0.00 13.25 C0.00 5.93 5.93 0.00 13.25 0.00 C20.57 0.00 13.25 0.00 13.25 0.00 Z M13.25 1.54 C13.25 1.54 7.17 2.78 4.97 4.97 C2.78 7.17 1.54 10.15 1.54 13.25 C1.54 19.72 6.78 24.96 13.25 24.96 C19.71 24.96 24.95 19.72 24.95 13.25 C24.96 6.79 13.25 1.54 13.25 1.54 C13.25 1.54 13.25 1.54 13.25 1.54 Z M9.06 7.50 C9.06 7.50 9.86 7.66 10.15 7.95 C10.44 8.23 10.61 8.63 10.61 9.04 C10.61 9.89 9.91 10.58 9.06 10.58 C8.20 10.58 7.51 9.89 7.51 9.04 C7.51 8.63 7.67 8.23 7.96 7.95 C8.25 7.66 9.06 7.50 9.06 7.50 C9.06 7.50 9.06 7.50 9.06 7.50 Z M13.25 22.53 C8.84 22.53 5.18 19.39 4.43 15.62 C4.28 14.68 5.05 14.46 5.78 14.63 C8.20 15.34 10.72 15.68 13.25 15.65 C15.77 15.68 18.28 15.34 20.71 14.64 C21.41 14.46 22.08 15.53 22.08 15.53 C22.08 15.53 17.69 22.53 13.25 22.53 C8.84 22.53 13.25 22.53 13.25 22.53 Z M19.69 16.06 C19.69 16.06 19.69 16.06 19.69 16.06 C19.70 16.06 19.69 16.06 19.69 16.06 C19.69 16.06 19.69 16.06 19.69 16.06 Z M13.26 16.89 C10.67 16.89 8.35 16.61 6.75 16.03 C5.60 15.69 5.82 17.05 6.63 17.47 C8.71 18.41 10.97 18.89 13.26 18.86 C15.98 18.86 18.40 18.23 20.00 17.41 C20.74 16.94 19.74 16.11 19.69 16.06 C19.69 16.06 19.69 16.06 19.69 16.06 C19.69 16.06 19.69 16.06 19.69 16.06 C19.69 16.06 19.68 16.06 19.68 16.06 C19.68 16.06 19.67 16.07 19.64 16.08 C17.56 16.64 15.42 16.92 13.26 16.89 C10.67 16.89 13.26 16.89 13.26 16.89 Z M17.45 7.50 C17.45 7.50 18.25 7.66 18.55 7.95 C18.84 8.23 19.00 8.63 19.00 9.04 C19.01 9.60 18.71 10.11 18.23 10.40 C17.75 10.68 17.15 10.68 16.67 10.40 C16.19 10.11 15.89 9.60 15.90 9.04 C15.90 8.63 16.06 8.23 16.36 7.95 C16.65 7.66 17.45 7.50 17.45 7.50 C17.45 7.50 17.45 7.50 17.45 7.50 Z"
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
  background: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(210,213,219,0.9)",
    position: "absolute"
  },
  keyboard: {
    top: "3.44%",
    left: "0.80%",
    width: "98.40%",
    height: "88.32%",
    position: "absolute"
  },
  return: {
    top: "62.26%",
    left: "76.15%",
    width: 88,
    height: 42,
    position: "absolute"
  },
  key: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(172,180,190,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  return1: {
    top: "26.19%",
    left: "25.00%",
    backgroundColor: "transparent",
    color: "rgba(22,22,22,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "sfprotext-regular",
    letterSpacing: -0.32
  },
  space: {
    top: "62.26%",
    left: "25.20%",
    width: 182,
    height: 42,
    position: "absolute"
  },
  key1: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  space1: {
    top: "26.19%",
    left: "37.91%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "sfprotext-regular",
    letterSpacing: -0.32,
    textAlign: "center"
  },
  style1: {
    top: "62.26%",
    left: "0.00%",
    width: 87,
    height: 42,
    position: "absolute"
  },
  key2: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(172,180,190,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  style2: {
    top: "26.19%",
    left: "34.48%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "sfprotext-regular",
    letterSpacing: -0.32,
    textAlign: "center"
  },
  backspace: {
    top: "42.02%",
    left: "88.62%",
    width: 42,
    height: 42,
    position: "absolute"
  },
  key3: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(172,180,190,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  path1: {
    top: "29.76%",
    left: "22.62%",
    width: "57.14%",
    height: "42.86%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path2: {
    top: "40.74%",
    left: "46.69%",
    width: "18.52%",
    height: "18.52%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  m: {
    top: "42.02%",
    left: "76.15%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key4: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  l: {
    top: "14.29%",
    left: "18.75%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  n: {
    top: "42.02%",
    left: "65.99%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key5: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  k: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  b: {
    top: "42.02%",
    left: "55.83%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key6: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  j: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  v: {
    top: "42.02%",
    left: "45.66%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key7: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  h: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  c: {
    top: "42.02%",
    left: "35.50%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key8: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  g: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  x: {
    top: "42.02%",
    left: "25.34%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key9: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  f: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  z: {
    top: "42.02%",
    left: "15.18%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key10: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  d: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  shift: {
    top: "42.02%",
    left: "0.00%",
    width: 42,
    height: 42,
    position: "absolute"
  },
  key11: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(172,180,190,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  path2458: {
    top: "29.76%",
    left: "25.00%",
    width: "48.98%",
    height: "41.72%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  l1: {
    top: "21.01%",
    left: "86.31%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key12: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  l2: {
    top: "14.29%",
    left: "40.63%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  k1: {
    top: "21.01%",
    left: "76.15%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key13: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  k2: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  j1: {
    top: "21.01%",
    left: "65.99%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key14: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  j2: {
    top: "14.29%",
    left: "40.63%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  h1: {
    top: "21.01%",
    left: "55.83%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key15: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  h2: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  g1: {
    top: "21.01%",
    left: "45.66%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key16: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  g2: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  f1: {
    top: "21.01%",
    left: "35.50%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key17: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  f2: {
    top: "14.29%",
    left: "37.50%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  d1: {
    top: "21.01%",
    left: "25.34%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key18: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  d2: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  s: {
    top: "21.01%",
    left: "15.31%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key19: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  s1: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  a: {
    top: "21.01%",
    left: "5.15%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key20: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  a1: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  p: {
    top: "0.00%",
    left: "91.33%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key21: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  p1: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  o: {
    top: "0.00%",
    left: "81.17%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key22: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  o1: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  i: {
    top: "0.00%",
    left: "71.00%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key23: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  i1: {
    top: "14.29%",
    left: "40.63%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  u: {
    top: "0.00%",
    left: "60.84%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key24: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  u1: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  y: {
    top: "0.00%",
    left: "50.68%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key25: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  y1: {
    top: "14.29%",
    left: "31.25%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  t: {
    top: "0.00%",
    left: "40.51%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key26: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  t1: {
    top: "14.29%",
    left: "37.50%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  r: {
    top: "0.00%",
    left: "30.35%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key27: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  r1: {
    top: "14.29%",
    left: "37.50%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  e: {
    top: "0.00%",
    left: "20.19%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key28: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  e1: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  w: {
    top: "0.00%",
    left: "10.16%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key29: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  w1: {
    top: "14.29%",
    left: "21.88%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  q: {
    top: "0.00%",
    left: "0.00%",
    width: 32,
    height: 42,
    position: "absolute"
  },
  key30: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  q1: {
    top: "14.29%",
    left: "28.13%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 23,
    fontFamily: "sfprotext-regular",
    lineHeight: 28,
    textAlign: "center"
  },
  dictationPath: {
    top: "89.88%",
    left: "88.62%",
    width: "4.07%",
    height: "9.73%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  emojiPath: {
    top: "89.49%",
    left: "5.83%",
    width: "7.18%",
    height: "10.31%",
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  }
});
