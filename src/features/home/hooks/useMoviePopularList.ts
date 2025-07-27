import { useQuery } from '@tanstack/react-query';
import { getMovieNowPlayingList } from '~/services/serviceAPIs';
import { IMoviePagingResponse, IMovieParams } from '~/types/api';

const useMoviePopularList = (params: IMovieParams) => {

  return useQuery<IMoviePagingResponse, EvalErrorConstructor[]>({
    queryKey: ['moviePopularList', params],
    queryFn: () => getMovieNowPlayingList('popular', params),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export default useMoviePopularList;
