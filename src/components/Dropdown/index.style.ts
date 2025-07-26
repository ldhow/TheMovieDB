import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  wrapper: {
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  listWrapper: {
    borderTopWidth: 1,
    borderColor: Colors.borderColor,
    padding: 16,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  selectedItem: {
    backgroundColor: Colors.primary,
  },
  itemText: {
    fontSize: 14,
    color: Colors.black,
  },
  selectedText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});