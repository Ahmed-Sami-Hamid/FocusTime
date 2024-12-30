import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { colors } from "../utils/colors";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  iconTitle,
  title,
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      {iconTitle ? (
        <Image
          source={iconTitle}
          style={{ width: size / 2, height: size / 2 }}
        />
      ) : (
        <Text style={[styles(size).text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(94, 132, 226, 0.3)",
    borderWidth: 2,
  },
  text: { color: colors.white, fontSize: size / 4 },
});
