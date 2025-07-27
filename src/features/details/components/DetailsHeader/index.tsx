import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import { IMovieDetails } from "~/types/model";
import { styles } from "./index.style";

interface Props {
  movie: IMovieDetails;
  onBack: () => void;
}

const DetailsHeader = ({ movie, onBack }: Props) => {
  return (
    <View style={styles.overviewHeader}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <FontAwesome6
          size={20}
          name="chevron-left"
          iconStyle="solid"
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {movie?.name}{" "}
          <Text style={styles.year}>
            ({movie.releaseYear})
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default DetailsHeader;
