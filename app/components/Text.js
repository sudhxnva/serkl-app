import { Text } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
