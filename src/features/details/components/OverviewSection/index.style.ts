import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  wrapper: {
  },
  tagline: {
    fontSize: 20,
    marginTop: 16,
    color: Colors.white,
    fontStyle: 'italic'
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 16,
    color: Colors.white,
    fontWeight: 'bold'
  },
  overview: {
    fontSize: 16,
    color: Colors.white,
    marginTop: 8,
    lineHeight: 20,
  },
});