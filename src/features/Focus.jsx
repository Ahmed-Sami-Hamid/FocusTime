import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { spacing } from "../utils/sizes";
import AddIcon from "../../assets/addIcon.png";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <TouchableOpacity onPress={() => addSubject(subject)}>
            <Image style={styles.imageIcon} source={AddIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "top",
    flexDirection: "row",
  },
  imageIcon: {
    width: 50,
    height: 50,
  },
});
