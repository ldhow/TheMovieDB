import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  poster: {
    width: 112,
    borderRadius: 8,
  },
  details: {
    gap: 8,
    flex: 1,
  },
  year: { fontWeight: '400' },
  info: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold'
  }
});