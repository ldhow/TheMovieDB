// types/navigation.ts
export type HomeStackParamList = {
  Home: undefined;
  Details: { id: string }; // pass movie ID or any param
};

export type WatchlistStackParamList = {
  Watchlist: undefined;
};
