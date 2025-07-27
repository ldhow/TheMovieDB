import { IMoviePagingResponse, IMovieResponse, IUserProfileResponse } from './api';

// TODO: convert from snake_case to camelCase
export type IMovie = IMovieResponse;
export type IMoviePaging = IMoviePagingResponse;
export type IMovieCategory = 'nowPlaying' | 'popular' | 'upcoming';
export type IOrderType = 'asc' | 'rating' | 'releaseDate';

export interface IMovieDetails {
  id: number;
  name: string;
  posterUrl: string;
  releaseYear: string;
  rating: string;
  releaseDate: string;
  runtime: string;
  genres: string;
  status: string;
  language: string;
  userScore: number;
  votePercent: number;
  tagline?: string;
  overview?: string;
}

export interface ICredits {
  crew: {
    director?: string;
    writer?: string;
  },
  cast: ICastMember[]
}

export interface ICastMember {
  id: number;
  name: string;
  character: string;
  profileUrl?: string;
}

export type IUserProfile = IUserProfileResponse;