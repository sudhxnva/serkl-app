import { StyleSheet } from "react-native";
import { Text, Heading } from "native-base";

import Screen from "../../components/Screen";

export default function SplashScreen() {
  return (
    <Screen style={styles.container}>
      <Heading fontSize="5xl">Serkl</Heading>
      <Text fontSize="sm">A personal app for my circles</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
