import { StyleSheet } from "react-native";

import Screen from "../../components/Screen";
import Text from "../../components/Text";

export default function SplashScreen() {
  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Serkl</Text>
      <Text style={styles.subtitle}>A personal app for my circles</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "400",
  },
});
