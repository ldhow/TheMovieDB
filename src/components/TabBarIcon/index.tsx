import React from 'react';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

type TabBarIconProps = {
  color: string;
  size: number;
  name: "house" | "bookmark";
};

const TabBarIcon = ({ color, size, name }: TabBarIconProps) => {
  return (
    <FontAwesome6 name={name} size={size} color={color} iconStyle="solid" />
  );
};

export default TabBarIcon;
