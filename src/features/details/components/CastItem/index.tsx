import { Image, Text, View } from "react-native";
import Card from "~/components/Card";
import { ICastMember } from "~/types/model";
import { FC } from "react";
import { styles } from "./index.style";
import avatar from '~/assets/images/avatar_placeholder.png';
import { getImageSource } from "~/utils";

interface ICastItemProps {
  castMember: ICastMember;
}

const CastItem: FC<ICastItemProps> = ({ castMember }) => {
  return (
    <Card style={styles.container}>
      <Image source={getImageSource(castMember.profileUrl, avatar)} style={styles.image} />
     <View style={styles.infoWrapper}>
        <Text style={styles.name}>{castMember.name}</Text>
        <Text style={styles.role}>{castMember.character}</Text>
     </View>
    </Card>
  );
};

export default CastItem;
