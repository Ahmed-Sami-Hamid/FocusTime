import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="10"
          onPress={() => onChangeTime(10)}
          style={styles.firstButton}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="15"
          onPress={() => onChangeTime(15)}
          style={styles.secondButton}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="20"
          onPress={() => onChangeTime(20)}
          style={styles.thirdButton}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
  firstButton: {
    backgroundColor: colors.red,
  },
  secondButton: {
    backgroundColor: colors.green,
  },
  thirdButton: {
    backgroundColor: colors.puporl,
  },
});
