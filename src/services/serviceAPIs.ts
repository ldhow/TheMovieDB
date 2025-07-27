import { DEFAULT_BASE_URL, Endpoints } from "~/constants/endpoints";
import { ICreditsResponse, IMovieDetailsParams, IMovieDetailsResponse, IMoviePagingResponse, IMovieParams, IRecommendationParams, IRecommendationResponse, IUserProfileResponse } from "~/types/api";
import { axiosInstance } from "./axiosInstance";
import { IMovieCategory } from "~/types/model";
import { endpointMap } from "~/constants/values";

const baseURL = process.env.BASE_URL || DEFAULT_BASE_URL;

export const getMovieNowPlayingList =
    async (movieCategory: IMovieCategory, params: IMovieParams): Promise<IMoviePagingResponse> => {
        const url = baseURL.concat('/' + endpointMap[movieCategory]);

        const response = await axiosInstance.get<IMoviePagingResponse>(url, { params });
        return response.data;
    };

export const getMovieDetails =
    async (movieId: number, params: IMovieDetailsParams): Promise<IMovieDetailsResponse> => {
        const url = baseURL.concat('/' + Endpoints.movieDetails
            .replace('{movie_id}', movieId.toString()))

        const response = await axiosInstance.get<IMovieDetailsResponse>(url, { params });
        return response.data;
    };

export const getMovieCredits =
    async (movieId: number, params: IMovieDetailsParams): Promise<ICreditsResponse> => {
        const url = baseURL.concat('/' + Endpoints.movieCredits
            .replace('{movie_id}', movieId.toString()))

        const response = await axiosInstance.get<ICreditsResponse>(url, { params });
        return response.data;
    };

export const getProfile = async (): Promise<IUserProfileResponse> => {
    const url = `${baseURL}/${Endpoints.profile}`;

    const response = await axiosInstance.get<IUserProfileResponse>(url);
    return response.data;
};

export const getRecommendations =
    async (movieId: number, params: IMovieDetailsParams): Promise<IRecommendationResponse> => {
        const url = `${baseURL}/${Endpoints.movieRecommendations
            .replace('{movie_id}', movieId.toString())}`;

        const response = await axiosInstance.get<IRecommendationResponse>(url, { params });
        return response.data;
    };