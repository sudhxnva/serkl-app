import { useRef, useState } from "react";
import { Animated, FlatList } from "react-native";
import { Box, Button, HStack } from "native-base";

import onboardingSlides from "../../config/onboarding";
import OnboardingItem from "../../components/onboarding/Item";
import Paginator from "../../components/onboarding/Paginator";
import Screen from "../../components/Screen";

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex == onboardingSlides.length - 1;
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNextClick = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last item");
    }
  };

  return (
    <Screen>
      <Box alignItems="center" pt={2} flex={1} width="full">
        <Box flex={3}>
          <FlatList
            data={onboardingSlides}
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
        </Box>
        <Paginator
          data={onboardingSlides}
          scrollX={scrollX}
          currentIndex={currentIndex}
        />
        <Box mt={7} mb={5} px={5} width="full">
          <HStack space={2} justifyContent="space-between">
            <Button size="md" variant="link">
              {isLastSlide ? " " : "Skip"}
            </Button>
            <Button
              size="md"
              variant={!isLastSlide ? "link" : "subtle"}
              onPress={handleNextClick}
            >
              {isLastSlide ? "Finish" : "Next"}
            </Button>
          </HStack>
        </Box>
      </Box>
    </Screen>
  );
}
