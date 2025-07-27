export interface IMovieParams {
  language?: string;
  page?: number;
  region?: string
}

export interface IMoviePagingResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovieResponse[];
  total_pages: number;
  total_results: number;
}
export interface IMovieResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieDetailsResponse {
  adult: boolean;
  backdrop_path?: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres?: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface ICreditsResponse {
  id: number;
  cast: ICastMemberResponse[];
  crew: ICrewMemberResponse[];
}

export interface ICastMemberResponse {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  gender?: number | null;

}

export interface ICrewMemberResponse {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
  gender?: number | null;
}


export interface IUserProfileResponse {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string | null;
    };
  };
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

export interface IMovieDetailsParams {
  language?: string;
}

export interface IRecommendationParams {
  page: number;
  language?: string;
}

export interface IRecommendationResponse {
  page: number;
  results: IMovieResponse[];
  total_pages: number;
  total_results: number;
}
