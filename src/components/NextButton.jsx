import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

const NextButton = ({ percentage, scrollT0, isFinished }) => {
  const size = 100;
  const stockWidth = 2;
  const center = size / 2;
  const radius = size / 2 - stockWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  // Animation function
  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          {/* Static Circle */}
          <Circle
            r={radius}
            cx={center}
            cy={center}
            stroke="#e6e7e8"
            strokeWidth={stockWidth}
          />
          {/* Animated Circle */}
          <Circle
            r={radius}
            stroke="#F83C8C"
            cx={center}
            cy={center}
            strokeWidth={stockWidth}
            strokeDasharray={circumference}
            ref={progressRef}
          />
        </G>
      </Svg>
      {/* Touchable Button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={scrollT0}
      >
        {isFinished ? (
          <AntDesign name="check" size={32} color="#ffffff" />
        ) : (
          <AntDesign name="arrowright" size={32} color="#ffffff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDoen: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    width: 30,
    height: 30,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#F83C8C",
    borderRadius: 100,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDone: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
