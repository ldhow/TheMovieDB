import { UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { IMoviePagingResponse, IMovieParams } from '~/types/api';
import { useMovieActions, useMovieStore } from '../stores/useMovieStores';
import useMovieNowPlayingList from './useMovieNowPlayingList';
import useMoviePopularList from './useMoviePopularList';
import useMovieUpcomingList from './useMovieUpcomingList';
import { useShallow } from 'zustand/react/shallow';
import { DEFAULT_LANGUAGE } from '~/constants/values';
import { useUserProfileStore } from '~/shared/stores/useUserProfileStore';

export const useMovieList = () => {
  const userProfile = useUserProfileStore(state => state.userProfile);
  const [movieCategory, movies, page, searchQuery] = useMovieStore(useShallow((state) => [state.movieCategory, state.movies, state.page, state.searchQuery]));
  const { setTotalPages, setMovies } = useMovieActions();

  const params: IMovieParams = {
    language: userProfile?.iso_639_1 ?? DEFAULT_LANGUAGE,
    page: page,
    region: userProfile?.iso_3166_1
  }

  let rs: UseQueryResult<IMoviePagingResponse, EvalErrorConstructor[]>;
  switch (movieCategory) {
    case 'nowPlaying':
      rs = useMovieNowPlayingList(params);
      break;
    case 'popular':
      rs = useMoviePopularList(params);
      break;
    case 'upcoming':
      rs = useMovieUpcomingList(params);
      break;
  }
  const { data, isLoading, isError, error } = rs;

  // Update the movies and total pages when data changes
  useEffect(() => {
    if (data) {
      const filteredResults = searchQuery
        ? data.results.filter(movie => movie.title.toLowerCase()
          .includes(searchQuery.toLowerCase()))
        : data.results;

      setTotalPages(data.total_pages ?? 1);
      setMovies(filteredResults);
    }
  }, [data, setTotalPages, setMovies, searchQuery]);

  const isNoMovies = !movies?.length;

  return {
    movies: movies,
    isLoading,
    isError,
    error,
    isNoMovies
  };
};
