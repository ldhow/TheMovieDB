import { ViewStyle } from 'react-native';
import { Radius } from '~/types/style';

export const getRadiusStyle = (radius?: Radius): ViewStyle => {
  const radiusValue =
    typeof radius === 'number'
      ? radius
      : {
          none: 0,
          small: 4,
          medium: 10,
          large: 16,
          full: 999,
        }[radius ?? 'medium'];

  return { borderRadius: radiusValue };
};
