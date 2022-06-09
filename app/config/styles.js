import { Platform } from "react-native";
import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.black,
    fontSize: 15,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
};

export default defaultStyles;
