import React from "react";
import { Text, View } from "react-native";
import { IMovieDetails } from "~/types/model";
import { styles } from "./index.style";

const OverviewSection = ({ movie }: { movie: IMovieDetails }) => {
  return (
    <View style={styles.wrapper}>
      {!!movie.tagline && (
        <Text style={styles.tagline}>
          <Text style={{ fontStyle: "italic" }}>{movie.tagline}</Text>
        </Text>
      )}
      <Text style={styles.sectionTitle}>Overview</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

export default OverviewSection;
