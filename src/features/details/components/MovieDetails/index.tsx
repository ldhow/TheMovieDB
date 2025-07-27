import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./index.style";
import { ICredits, IMovieDetails } from "~/types/model";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
import PosterAndDetails from "../PosterAndDetails";
import MovieMeta from "../MovieMeta";
import OverviewSection from "../OverviewSection";
import DetailsHeader from "../DetailsHeader";
import OutlinedButton from "~/components/Button/OutlinedButton";

interface IMovieDetailsProps {
  movie: IMovieDetails;
  credits: ICredits;
  onBack: () => void;
}

const MovieDetails: FC<IMovieDetailsProps> = ({ movie, credits, onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsWrapper}>
        <DetailsHeader movie={movie} onBack={onBack} />
        <PosterAndDetails movie={movie} />
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <MovieMeta movie={movie} credits={credits} />
        <OverviewSection movie={movie} />
        <OutlinedButton
          icon={
            <FontAwesome6
              name="bookmark"
              size={16}
              color="white"
              iconStyle="solid"
            />
          }
          title="Add To Watchlist"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default MovieDetails;
