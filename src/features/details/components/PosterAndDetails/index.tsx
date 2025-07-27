import React from "react";
import { View, Text, Image } from "react-native";
import { IMovieDetails } from "~/types/model";
import { styles } from "./index.style";
import Card from "~/components/Card";

const PosterAndDetails = ({ movie }: { movie: IMovieDetails }) => {
  return (
    <View style={styles.topRow}>
      <Image source={{ uri: movie.posterUrl }} style={styles.poster} />
      <View style={styles.details}>
        <Card>
          {/* rating doesn't exist in getMovieDetails api */}
          <Text style={styles.info}>{movie.rating}</Text>
        </Card>
        <Text style={styles.info}>
          {movie.releaseDate} • {movie.runtime}
        </Text>
        <Text style={styles.info}>{movie.genres}</Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>Status:</Text> {movie.status}
        </Text>
        <Text style={styles.info}>
          <Text style={styles.bold}>Original Language:</Text> {movie.language}
        </Text>
      </View>
    </View>
  );
};

export default PosterAndDetails;
