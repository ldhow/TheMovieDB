import { View, Text, FlatList } from "react-native";
import { styles } from "./index.style";
import { ICastMember } from "~/types/model";
import { FC } from "react";
import CastItem from "../CastItem";

interface ICastListProps {
  cast: ICastMember[];
}

const CastList: FC<ICastListProps> = ({ cast }) => {
  const hasCast = !!cast?.length;

  return (
    <>
      {hasCast && (
        <View style={styles.container}>
          <Text style={styles.title}>Top Billed Cast</Text>
          <FlatList
            data={cast}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(member) => member.id.toString()}
            renderItem={({ item }) => <CastItem castMember={item} />}
            contentContainerStyle={styles.list}
          />
        </View>
      )}
    </>
  );
};

export default CastList;
