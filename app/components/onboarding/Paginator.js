import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";

import colors from "../../config/colors";

export default function Paginator({ data, currentIndex, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotSize = scrollX.interpolate({
          inputRange,
          outputRange: [12, 18, 12],
          extrapolate: "clamp",
        });

        const borderWidth = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            "rgb(149,149,149)",
            "rgb(255,255,255)",
            "rgb(149,149,149)",
          ],
          extrapolate: "clamp",
        });

        return (
          //   <View
          //     style={[
          //       styles.dot,
          //       currentIndex == i ? { ...styles.dotSelected } : {},
          //     ]}
          //     key={i.toString()}
          //   />
          <Animated.View
            style={[
              styles.dot,
              { height: dotSize, width: dotSize, borderWidth, backgroundColor },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: "50%",
    backgroundColor: colors.medium,
    marginHorizontal: 8,
    borderColor: colors.dark,
    borderWidth: 1,
  },
  dotSelected: {
    height: 18,
    width: 18,
    backgroundColor: colors.white,
    borderColor: colors.dark,
    borderWidth: 1,
  },
});
