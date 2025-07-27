import { useMovieCredits } from "./useMovieCredits";
import { useMovieDetails } from "./useMovieDetails";
import { IMovieDetailsParams } from "~/types/api";
import { DEFAULT_LANGUAGE } from "~/constants/values";
import { useRecommendedMovies } from "./useRecommendedMovies";
import { useUserProfileStore } from "~/shared/stores/useUserProfileStore";

export const useMovieData = (id: number) => {
  const userProfile = useUserProfileStore(state => state.userProfile);
  const params: IMovieDetailsParams = {
    language: userProfile?.iso_639_1 ?? DEFAULT_LANGUAGE,
  }

  const {
    data: movie,
    isError: isMovieError,
    isLoading: isMovieLoading,
    isFetched: isMovieFetched,
    error: movieError
  } = useMovieDetails(id, params);

  const {
    data: creadits,
    isError: isCreditError,
    isLoading: isCreditLoading,
    isFetched: isCreditFetched,
    error: creaditError
  } = useMovieCredits(id, params);

  const {
    data: recommendedMovies,
    isError: isRecommendationError,
    isLoading: isRecommendationLoading,
    isFetched: isRecommendationFetched,
    error: recommendationError
  } = useRecommendedMovies(id, params);

  const data = { movie, creadits, recommendedMovies };
  const isError = isMovieError || isCreditError || isRecommendationError;
  const isLoading = isMovieLoading || isCreditLoading || isRecommendationLoading;
  const isFetched = isMovieFetched && isCreditFetched && isRecommendationFetched;
  const error = movieError || creaditError || recommendationError;

  return { data, isError, isLoading, isFetched, error }
}