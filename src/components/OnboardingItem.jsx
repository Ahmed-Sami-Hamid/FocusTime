import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width }]}
        resizeMode="contain"
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
    color: "#BEBEBE",
    textAlign: "center",
    paddingHorizontal: 4,
  },
});

export default OnboardingItem;
