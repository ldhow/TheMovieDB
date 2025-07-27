import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    padding: 8,
    overflow: "hidden",
    borderColor: Colors.borderColor,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
});