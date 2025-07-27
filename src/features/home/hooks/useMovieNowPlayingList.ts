import { useQuery } from '@tanstack/react-query';
import { getMovieNowPlayingList } from '~/services/serviceAPIs';
import { IMoviePagingResponse, IMovieParams } from '~/types/api';

const useMovieNowPlayingList = (params: IMovieParams) => {

  return useQuery<IMoviePagingResponse, EvalErrorConstructor[]>({
    queryKey: ['movieNowPlayingList', params],
    queryFn: () => getMovieNowPlayingList('nowPlaying', params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useMovieNowPlayingList;
