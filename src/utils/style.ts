import { ViewStyle } from 'react-native';
import { Colors } from '~/constants/colors';
import { Radius } from '~/types/style';

export const getRadiusStyle = (radius?: Radius): ViewStyle => {
  const radiusValue =
    typeof radius === 'number'
      ? radius
      : {
        none: 0,
        small: 4,
        medium: 8,
        large: 16,
        full: 999,
      }[radius ?? 'medium'];

  return { borderRadius: radiusValue };
};

export const getShadowStyle = (elevation: number): ViewStyle => ({
  elevation,
  shadowColor: Colors.black,
  shadowOffset: { width: 0, height: elevation * 0.5 },
  shadowOpacity: 0.2,
  shadowRadius: elevation,
});