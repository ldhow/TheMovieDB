import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.error,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});