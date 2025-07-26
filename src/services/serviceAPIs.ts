import { Endpoints } from "~/constants/endpoints";
import { IMoviePagingResponse } from "~/types/api";
import { axiosInstance } from "./axiosInstance";

const baseURL = process.env.EXPO_BASE_URL;

export const getMovieNowPlayingList = async (): Promise<IMoviePagingResponse> => {
    const url = `${baseURL}/${Endpoints.movieNowPlayingList}`;
    const response = await axiosInstance.post<IMoviePagingResponse>(url);
    return response.data;
};