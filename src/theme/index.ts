import { DefaultTheme } from "@react-navigation/native";
import { Colors } from "~/constants/colors";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    primary: Colors.primary,
    text: Colors.black,
    border: Colors.borderColor,
  },
};
