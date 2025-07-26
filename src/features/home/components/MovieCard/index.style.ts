import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  shadowWrapper: {
    elevation: 4,
    backgroundColor: Colors.cardShadow, // light transparent shadow
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  poster: {
    width: 96,
  },
  details: {
    flex: 1,
    padding: 16,
    boxSizing: 'border-box',
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    fontSize: 14,

  },
  description: {
    fontSize: 14,
  },
});
