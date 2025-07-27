import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";

// types/navigation.ts
export type HomeStackParamList = {
  Home: undefined;
  Details: { id: number }; // pass movie ID or any param
};

export type WatchlistStackParamList = {
  Watchlist: undefined;
};

export type HomeNavigation = NativeStackNavigationProp<HomeStackParamList, "Home">;
export type DetailsNavigation = NativeStackNavigationProp<HomeStackParamList, "Details">;
export type DetailsScreenProps = NativeStackScreenProps<HomeStackParamList, 'Details'>;
