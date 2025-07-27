import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 0,
    gap: 8,
    width: 140,
    alignSelf: 'stretch'
  },
  image: {
    width: 140,
    height: 156,
  },
  infoWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 4
  },
  name: {
    fontWeight: '600', fontSize: 18,
  },
  role: { fontSize: 16, },
});