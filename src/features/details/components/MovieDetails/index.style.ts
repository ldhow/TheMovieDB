import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    gap: 16,
    color: Colors.white
  },
  detailsWrapper: {
    backgroundColor: Colors.sectionBg,
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16
  },
  watchlistButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  watchlistText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
