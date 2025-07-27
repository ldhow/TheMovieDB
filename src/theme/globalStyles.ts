import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const globalStyles = StyleSheet.create({
  boxShadow: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    elevation: 4, // For Android shadow
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
});