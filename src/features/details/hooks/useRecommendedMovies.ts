import { useQuery } from "@tanstack/react-query";
import { getRecommendations } from "~/services/serviceAPIs";
import { IMovieDetailsParams, IRecommendationResponse } from "~/types/api";
import { IMovie } from "~/types/model";

export const useRecommendedMovies = (id: number, params: IMovieDetailsParams) => {

  return useQuery<IRecommendationResponse, EvalErrorConstructor[], IMovie[]>({
    queryKey: ['recommendedMovies', id],
    queryFn: () => getRecommendations(id, params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: (response) => {
      return response.results;
    }
  });
}