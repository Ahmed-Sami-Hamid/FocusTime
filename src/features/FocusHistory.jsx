import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import TimeImage from "../../assets/mainIcon.png";

export const FocusHistory = ({ history, onDelete }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>Things we've focused on:</Text>;

  const renderRightActions = (item) => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.buttonEdit}>
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDelete}
        onPress={() => onDelete(item)}
      >
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Swipeable renderRightActions={() => renderRightActions(item)}>
      <View style={styles.cardItem}>
        <Image style={styles.timeImage} source={TimeImage} />
        <Text style={styles.item}>{item}</Text>
      </View>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <GestureHandlerRootView>
        <FlatList data={history} renderItem={renderItem} />
      </GestureHandlerRootView>
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
    marginBottom: spacing.sm,
  },
  actionsContainer: {
    flexDirection: "row",
    marginBottom: 2,
  },

  buttonEdit: {
    width: 80,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.green,
  },
  buttonDelete: {
    width: 80,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.red,
  },
  actionText: {
    color: colors.white,
  },
});
