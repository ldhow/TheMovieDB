import { Image, Text, View } from "react-native";
import { IMovie } from "~/types/model";
import { FC } from "react";
import { DEFAULT_IMAGE_BASE_URL } from "~/constants/endpoints";
import { styles } from "./index.style";

interface IRecommendedItemProps {
  movie: IMovie;
}

const RecommendedItem: FC<IRecommendedItemProps> = ({ movie }) => {
  const imageBaseUrl = process.env.IMAGE_BASE_URL || DEFAULT_IMAGE_BASE_URL;

  return (
    <View style={styles.container}>
      <Image
        // TODO: convert from snake_case to camelCase & return full path
        source={{ uri: `${imageBaseUrl}w500${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.name}>{movie.title}</Text>
      </View>
    </View>
  );
};

export default RecommendedItem;
