import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { DetailsNavigation, DetailsScreenProps } from "~/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import {
  CastList,
  ErrorBlock,
  MovieDetails,
  Recommendations,
} from "../components";
import { useMovieData } from "../hooks/useMovieData";
import { styles } from "./Details.style";

const DetailsScreen: FC<DetailsScreenProps> = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation<DetailsNavigation>();
  const { data, isError, isLoading, isFetched, error } = useMovieData(id);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      {isError && (
        <ErrorBlock
          message={
            error?.toString() ?? "Error loading movies. Please try again later."
          }
          handleBack={handleBack}
        />
      )}

      {isLoading && <ActivityIndicator size="large" />}

      {isFetched && data.movie && data.creadits && (
        <ScrollView style={styles.container}>
          {/* Info section */}
          <MovieDetails
            onBack={handleBack}
            movie={data.movie}
            credits={data.creadits}
          />
          {/*  Horizontal cast scroll */}
          <CastList cast={data.creadits?.cast} />
          {/* Movie suggestions */}
          <Recommendations recommendedMovies={data.recommendedMovies ?? []} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
