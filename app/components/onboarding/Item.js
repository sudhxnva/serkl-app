import { StyleSheet, View, Image, useWindowDimensions } from "react-native";

import Text from "../Text";

export default function item({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image style={[styles.image, { width }]} source={item.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 12,
    fontWeight: "400",
    paddingHorizontal: 30,
    textAlign: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    flex: 0.75,
  },
  textContainer: {
    flex: 0.25,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: "center",
  },
});
