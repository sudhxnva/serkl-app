import { useRef, useState } from "react";
import { Animated, Button, FlatList, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import OnboardingItem from "../../components/onboarding/Item";
import Paginator from "../../components/onboarding/Paginator";
import Screen from "../../components/Screen";

const slides = [
  {
    id: 1,
    title: "Your Serkl",
    description:
      "A Serkl for family, for people with common interests, for specific events",
    image: require("../../assets/onboarding-1.png"),
  },
  {
    id: 2,
    title: "Events",
    description:
      "Set up an event, invite interested people, discuss about the event and send important updates",
    image: require("../../assets/onboarding-2.png"),
  },
  {
    id: 3,
    title: "Explore",
    description:
      "Explore events of your interest in your locality, join any event, get notified about the updates.",
    image: require("../../assets/onboarding-3.png"),
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNextClick = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last item");
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <Paginator
          data={slides}
          scrollX={scrollX}
          currentIndex={currentIndex}
        />
        <View style={styles.buttonContainer}>
          <Button color={colors.dark} title="Skip" />
          <Button color={colors.dark} title="Next" onPress={handleNextClick} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    flex: 3,
  },
});
