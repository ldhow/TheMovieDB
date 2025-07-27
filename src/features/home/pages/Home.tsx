import React from "react";
import { View, Image, SafeAreaView } from "react-native";
import { styles } from "./Home.style";
import { StyledDropdown, StyledButton, StyledTextInput } from "~/components";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "~/types/navigation";
import { useMovieActions } from "../stores/useMovieStores";
import {
  listMovieCategorys,
  listOrderTypes,
  mapMovieCategorys,
  mapOrderTypes,
} from "~/constants/values";
import { IMovieCategory, IOrderType } from "~/types/model";
import { useMovieList, usePendingMovieFilters } from "../hooks";
import { MovieList } from "../components";

const HomeScreen = () => {
  const navigation = useNavigation<HomeNavigation>();
  const { nextPage } = useMovieActions();
  const {
    pendingCategory,
    setPendingCategory,
    pendingOrderType,
    setPendingOrderType,
    pendingSearchQuery,
    setPendingSearchQuery,
    hasChanged,
    applyChanges,
  } = usePendingMovieFilters();
  const { movies, error, isNoMovies, isError, isLoading } = useMovieList();

  const navigateToDetails = (value: number) => {
    navigation.push("Details", { id: value });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Movie category */}
        <StyledDropdown
          options={listMovieCategorys}
          selected={pendingCategory}
          displayText={(item) => mapMovieCategorys[item]}
          onSelect={(value: IMovieCategory) => setPendingCategory(value)}
          extractKey={(item) => item}
        />

        {/* Order by */}
        <StyledDropdown
          options={listOrderTypes}
          selected={pendingOrderType}
          displayText={(item) => mapOrderTypes[item]}
          onSelect={(value: IOrderType) => setPendingOrderType(value)}
          extractKey={(item) => item}
          placeholder="Order by"
        />

        {/* Search */}
        <StyledTextInput
          value={pendingSearchQuery}
          onChangeText={(text) => setPendingSearchQuery(text)}
          placeholder="Search..."
        />

        {/* Search button */}
        <StyledButton
          title="Search"
          onPress={applyChanges}
          disabled={!hasChanged}
          radius={"full"}
        />

        {/* render movie list */}
        <MovieList
          movies={movies}
          isLoading={isLoading}
          isError={isError}
          error={error}
          isNoMovies={isNoMovies}
          nextPage={nextPage}
          navigateToDetails={navigateToDetails}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
