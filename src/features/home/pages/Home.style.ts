import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 16
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  dropdown: {
  },
  dropdownBox: {
    zIndex: 1000,
  },
  sortButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  sortText: {
    fontWeight: '600',
  },
  searchButton: {
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 12,
  },
  searchText: {
    
    fontWeight: '600',
  },
  errorContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontWeight: '600',
  },
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