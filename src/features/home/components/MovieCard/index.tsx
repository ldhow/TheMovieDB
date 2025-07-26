// /components/MovieCard.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./index.style";
import { globalStyles } from "~/theme/globalStyle";
type Movie = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
};
export default function MovieCard({ movie, onPress }: { movie: Movie, onPress: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[globalStyles.boxShadow, styles.shadowWrapper]}>
      <View style={styles.card}>
        <Image source={{ uri: movie.image }} style={styles.poster} />
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.date}>{movie.date}</Text>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {movie.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
