import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    gap: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  list: {gap: 16}
});
