import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import { onboardingData } from "../utils/onboarding";
import NextButton from "./NextButton";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollT0 = () => {
    if (currentIndex < onboardingData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      slideRef.current.scrollToIndex({ index: 0 });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onboardingData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfiguration={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
        />
        ;
      </View>
      <Paginator data={onboardingData} scrollX={scrollX} />
      <NextButton
        scrollT0={scrollT0}
        percentage={(currentIndex + 1) * (100 / onboardingData.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Onboarding;
