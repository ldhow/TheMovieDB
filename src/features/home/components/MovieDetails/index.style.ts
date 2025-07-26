import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: { backgroundColor: Colors.primary, padding: 16 },
  backButton: { marginBottom: 8 },
  backText: { color: Colors.white },
  topRow: { flexDirection: 'row' },
  poster: { width: 100, height: 150, borderRadius: 8 },
  details: { flex: 1, marginLeft: 12 },
  title: { fontSize: 18, fontWeight: 'bold', color: Colors.white },
  year: { fontWeight: '400' },
  info: { color: Colors.white, fontSize: 12, marginTop: 2 },
  scoreRow: { flexDirection: 'row', marginTop: 16, alignItems: 'center' },
  scoreCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: { fontWeight: 'bold', color: Colors.primary },
  scoreLabel: { color: Colors.white, fontWeight: '600', marginBottom: 4 },
  credit: { color: Colors.white, fontSize: 13 },
  creditNote: { color: Colors.white, fontSize: 11, marginBottom: 4 },
  tagline: { marginTop: 16, color: Colors.white, fontStyle: 'italic' },
  sectionTitle: { marginTop: 16, color: Colors.white, fontWeight: 'bold' },
  overview: { color: Colors.white, marginTop: 8 },
  watchlistButton: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  watchlistText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
