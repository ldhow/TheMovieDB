import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IMovie, IMovieCategory, IOrderType } from "~/types/model";


interface IMovieStore {
  movies: IMovie[];
  movieCategory: IMovieCategory;
  orderType: IOrderType;
  page: number;
  totalPages: number;
  searchQuery: string;
  actions: {
    setMovies: (movies: IMovie[]) => void;
    setMovieCategory: (movieCategory: IMovieCategory) => void;
    setOrderType: (orderType: IOrderType) => void;
    setTotalPages: (totalPages: number) => void;
    nextPage: () => void;
    setSearchQuery: (query: string) => void;
  }
}

export const useMovieStore = create<IMovieStore>()(persist((set) => ({
  movies: [],
  movieCategory: 'nowPlaying',
  orderType: 'asc',
  page: 1,
  totalPages: 1,
  searchQuery: '',
  actions: {
    setMovies: (movies: IMovie[]) => set((prev) => ({ ...prev, movies })),
    setMovieCategory: (movieCategory: IMovieCategory) => set((prev) => {
     // Reset page and movies when feed type changes
      if (prev.movieCategory !== movieCategory) {
        return { ...prev, movieCategory, page: 1, movies: [] };
      }
      return prev;
    }),
    setOrderType: (orderType: IOrderType) => set((prev) => ({ ...prev, orderType })),
    setTotalPages: (totalPages: number) => set((prev) => ({ ...prev, totalPages })),
    nextPage: () => set((prev) => {
      if (prev.page < prev.totalPages) {
        return { page: prev.page + 1 };
      }
      return prev;
    }),
    setSearchQuery: (query: string) => set((prev) => ({ ...prev, searchQuery: query })),
  }
}), {
  name: 'movie-store',
  storage: createJSONStorage(() => AsyncStorage),
  partialize(state) {
    return {
      movieCategory: state.movieCategory,
      orderType: state.orderType,
    };
  },
}));

export const useMovieActions = () => useMovieStore((state) => state.actions);
