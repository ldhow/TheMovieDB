import { useQuery } from "@tanstack/react-query";
import { getMovieCredits, } from "~/services/serviceAPIs";
import { ICredits } from "~/types/model";
import { mapMovieCreditsResponse } from "../mapping";
import { ICreditsResponse, IMovieDetailsParams } from "~/types/api";

export const useMovieCredits = (id: number, params: IMovieDetailsParams) => {

  return useQuery<ICreditsResponse, EvalErrorConstructor[], ICredits>({
    queryKey: ['movieCredits', id],
    queryFn: () => getMovieCredits(id, params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    select: (responseCredits) => {
      const credits = mapMovieCreditsResponse(responseCredits)
      return credits;
    }
  });
}