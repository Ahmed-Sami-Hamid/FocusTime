import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { colors } from "../utils/colors";
import { Focus } from "../features/Focus";
import { Timer } from "../features/Timer";
import { FocusHistory } from "../features/FocusHistory";

export const MainPage = () => {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  const handleDelete = (item) => {
    setHistory((prevHistory) =>
      prevHistory.filter((historyItem) => historyItem !== item)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} onDelete={handleDelete} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
