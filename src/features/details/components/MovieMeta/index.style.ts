import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  movieMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 96
  },
  userScoreBlock: {
    display: "flex",
    gap: 8
  },
  scoreCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontWeight: 'bold', color: Colors.primary,
    fontSize: 20
  },
  scoreLabel: {
    fontSize: 18,
    color: Colors.white, fontWeight: '600', marginBottom: 4
  },
  creditsBlock: {
    gap: 16
  },
  credit: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  creditNote: {
    color: Colors.white, marginBottom: 4,
    fontSize: 14,

  },
});