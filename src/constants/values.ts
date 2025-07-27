import { IMovieCategory, IOrderType } from "~/types/model";
import { Endpoints } from "./endpoints";

export const listMovieCategorys: IMovieCategory[] = [
  "nowPlaying",
  "upcoming",
  "popular",
];

export const mapMovieCategorys = {
  "nowPlaying": "Now Playing",
  "upcoming": "Upcoming",
  "popular": "Popular",
};

export const listOrderTypes: IOrderType[] = [
  "asc",
  "rating",
  "releaseDate",
];

export const mapOrderTypes = {
  "asc": "By alphabetical order",
  "rating": "By rating",
  "releaseDate": "By release date",
};

export const endpointMap: Record<IMovieCategory, string> = {
  nowPlaying: Endpoints.movieNowPlayingList,
  popular: Endpoints.moviePopularList,
  upcoming: Endpoints.movieUpcomingList,
};

export const IMAGE_PLACEHOLDER_URL = 'https://placehold.co/600x400';

export const GENRES = {
  FEMALE: 1,
  MALE: 2
}

export const DEFAULT_LANGUAGE = 'en-US';