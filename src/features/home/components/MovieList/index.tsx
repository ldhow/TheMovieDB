import { FC } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import MovieCard from "../MovieCard";
import { StyledButton } from "~/components";
import { styles } from "./index.style";
import { IMovie } from "~/types/model";
import ErrorBadge from "~/components/Badge";

interface MovieListProps {
  movies: IMovie[];
  isLoading: boolean;
  isError: boolean;
  error: EvalErrorConstructor[] | null;
  isNoMovies: boolean;
  nextPage: () => void;
  navigateToDetails: (id: number) => void;
}

const MovieList: FC<MovieListProps> = ({
  movies,
  isLoading,
  isError,
  error,
  isNoMovies,
  nextPage,
  navigateToDetails,
}) => {
  {/* Loading if no movies and isLoading */}
  if (isLoading && !movies.length) {
    return <ActivityIndicator size="large" />;
  }

  {/* Error Handling */}
  if (isError) {
    return (
      <ErrorBadge message={error?.toString() ?? "Error loading movies. Please try again later."} />
    );
  }

  {/* No Movies Found */}
  if (isNoMovies) {
    return (
      <View style={styles.noMoviesContainer}>
        <Text style={styles.noMoviesText}>
          No movies found. Please try a different search.
        </Text>
      </View>
    );
  }
  
  {/* Movie List */}
  return (
    <FlatList
      data={movies}
      keyExtractor={(item, i) => `${item.id}_${i}`}
      renderItem={({ item }) => (
        <MovieCard movie={item} onPress={() => navigateToDetails(item.id)} />
      )}
      contentContainerStyle={styles.movieList}
      ListFooterComponent={
        <StyledButton title="Load More" onPress={nextPage} radius="medium" />
      }
    />
  );
};

export default MovieList;
