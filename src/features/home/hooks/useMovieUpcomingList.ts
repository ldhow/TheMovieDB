import { useQuery } from '@tanstack/react-query';
import { getMovieNowPlayingList } from '~/services/serviceAPIs';
import { IMoviePagingResponse, IMovieParams } from '~/types/api';

const useMovieUpcomingList = (params: IMovieParams) => {

  return useQuery<IMoviePagingResponse, EvalErrorConstructor[]>({
    queryKey: ['movieUpcomingList', params],
    queryFn: () => getMovieNowPlayingList('upcoming', params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useMovieUpcomingList;
