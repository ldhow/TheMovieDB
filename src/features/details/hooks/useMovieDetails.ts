import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "~/services/serviceAPIs";
import { IMovieDetailsParams, IMovieDetailsResponse } from "~/types/api";
import { IMovieDetails } from "~/types/model";
import { mapMovieDetailsResponse } from "../mapping";

export const useMovieDetails = (id: number, params: IMovieDetailsParams) => {

  return useQuery<IMovieDetailsResponse, EvalErrorConstructor[], IMovieDetails>({
    queryKey: ['movieDetails', id],
    queryFn: () => getMovieDetails(id, params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: (responseMovie) => {
      const movie = mapMovieDetailsResponse(responseMovie);
      return movie;
    }
  });
}