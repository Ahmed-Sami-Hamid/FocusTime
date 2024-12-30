import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import TimeImage from "../../assets/mainIcon.png";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>Things we've focused on:</Text>;

  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
      <View style={styles.cardItem}>
        <Image style={styles.timeImage} source={TimeImage} />
        <Text style={styles.item}>{item}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    flex: 1,
    textTransform: "capitalize",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    marginBottom: spacing.lg,
  },
  cardWrapper: {
    marginTop: spacing.sm,
  },
  timeImage: {
    width: 20,
    height: 20,
    marginRight: spacing.sm,
  },
  cardItem: {
    backgroundColor: colors.itemCard,
    padding: spacing.md,
    borderRadius: 10,
    minHeight: 70,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: spacing.lg,
  },
});
