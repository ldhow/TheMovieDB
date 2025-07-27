import React, { FC, ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { styles } from "./index.style";
import { getShadowStyle } from "~/utils/style";

interface ICardViewProps {
  children: ReactNode;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
}

const Card: FC<ICardViewProps> = ({ children, elevation = 0, style }) => {
  return (
    <View style={[styles.base, getShadowStyle(elevation), style]}>
      {children}
    </View>
  );
};

export default Card;
