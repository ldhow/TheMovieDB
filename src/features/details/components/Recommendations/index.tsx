import React, { FC } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./index.style";
import { IMovie } from "~/types/model";
import RecommendedItem from "../RecommendedItem";

interface IRecommendationsProps {
  recommendedMovies: IMovie[];
}

const Recommendations: FC<IRecommendationsProps> = ({ recommendedMovies }) => {
  const hasMovie = !!recommendedMovies?.length;
  return (
    <>
      {hasMovie && (
        <View style={styles.container}>
          <Text style={styles.title}>Recommendations</Text>
          <FlatList
            data={recommendedMovies}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => <RecommendedItem movie={item} />}
          />
        </View>
      )}
    </>
  );
};

export default Recommendations;
