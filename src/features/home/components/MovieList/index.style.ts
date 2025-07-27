import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  noMoviesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  noMoviesText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  movieList: {
    gap: 16,
    marginBottom: 48,
  }
});