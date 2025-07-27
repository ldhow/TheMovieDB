// /components/MovieCard.js
import React from "react";
import { View, Text, Image,  TouchableOpacity } from "react-native";
import { styles } from "./index.style";
import { globalStyles } from "~/theme/globalStyles";
import { IMovie } from "~/types/model";
import { formatDateToDayMonthYear  } from "~/utils";
import { DEFAULT_IMAGE_BASE_URL } from "~/constants/endpoints";

export default function MovieCard({ movie, onPress }: { movie: IMovie, onPress: () => void }) {
  const imageBaseUrl = process.env.IMAGE_BASE_URL || DEFAULT_IMAGE_BASE_URL;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[globalStyles.boxShadow, styles.shadowWrapper]}>
      <View style={styles.card}>
        <Image source={{ uri: `${imageBaseUrl}w185${movie.poster_path}` }} style={styles.poster} />
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.date}>{formatDateToDayMonthYear(movie.release_date)}</Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {movie.overview}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
