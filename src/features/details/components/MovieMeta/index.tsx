import React, { FC } from "react";
import { View, Text } from "react-native";
import { ICredits, IMovieDetails } from "~/types/model";
import { styles } from "./index.style";
import GaugeCircle from "~/components/GaugeCircle";

interface IMovieMetaProps {
  movie: IMovieDetails;
  credits: ICredits;
}

const MovieMeta: FC<IMovieMetaProps> = ({ movie, credits }) => {
  return (
    <View style={styles.movieMeta}>
      {/* User score section */}
      <View style={styles.userScoreBlock}>
        <GaugeCircle size={56} strokeWidth={4} value={movie.votePercent} />
        <Text style={styles.scoreLabel}>User Score</Text>
      </View>
      <View style={styles.creditsBlock}>
       
        {/* Credit section*/}
        <View>
          <Text style={styles.credit}>{credits.crew.director}</Text>
          <Text style={styles.creditNote}>Director, Writer</Text>
        </View>
        <View>
          <Text style={styles.credit}>{credits.crew.writer}</Text>
          <Text style={styles.creditNote}>Writer</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieMeta;
