import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import Onboarding from "./src/components/Onboarding";
import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    color: colors.white,
  },
});
