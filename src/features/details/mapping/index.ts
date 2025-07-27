import { DEFAULT_IMAGE_BASE_URL } from "~/constants/endpoints";
import { IMAGE_PLACEHOLDER_URL } from "~/constants/values";
import { ICreditsResponse, IMovieDetailsResponse } from "~/types/api";
import { ICastMember, ICredits, IMovieDetails } from "~/types/model";
import { formatDateToDMYSlash } from "~/utils";

const imageBaseUrl = process.env.IMAGE_BASE_URL || DEFAULT_IMAGE_BASE_URL;

export const mapMovieDetailsResponse = (movie: IMovieDetailsResponse): IMovieDetails => {
  const posterUrl = movie.poster_path
    ? `${imageBaseUrl}w500${movie.poster_path}`
    : IMAGE_PLACEHOLDER_URL;

  const genres = movie.genres?.map((g) => g.name).join(', ') || 'N/A';

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : 'N/A';

  const releaseDate = movie?.release_date ? formatDateToDMYSlash(movie.release_date) : 'N/A';

  const language =
    movie.spoken_languages?.[0]?.english_name ||
    movie.original_language ||
    'N/A';

  const userScore = Math.round((movie.vote_average ?? 0) * 10);
  const votePercent = Math.round((movie.vote_average ?? 0) * 10);

  return {
    id: movie.id,
    name: movie.title ?? movie.original_title,
    posterUrl,
    releaseYear: movie.release_date?.slice(0, 4) ?? 'N/A',
    rating: 'PG-13', //rating doesn't exist in getMovieDetails api
    releaseDate,
    runtime,
    genres,
    status: movie.status ?? 'N/A',
    language,
    userScore,
    votePercent,
    tagline: movie.tagline,
    overview: movie.overview,
  };
};

export const mapMovieCreditsResponse = (credits: ICreditsResponse): ICredits => {
  const director = credits.crew.find((member) => member.job === 'Director')?.name;
  const writer =
    credits.crew.find((member) => member.job === 'Writer')?.name ||
    credits.crew.find((member) => member.job === 'Screenplay')?.name;
  const crew = { director, writer };

  const cast = credits.cast.map<ICastMember>((member) => (
    {
      id: member.id,
      name: member.name,
      character: member.character,
      profileUrl: member.profile_path
        ? `${imageBaseUrl}w500${member.profile_path}` : undefined

    }
  ))

  return { crew, cast };
};
