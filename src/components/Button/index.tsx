import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import { styles } from "./index.style";
import { Radius } from "~/types/style";
import { getRadiusStyle } from "~/utils/style";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  radius?: Radius;
};

const StyledButton: React.FC<Props> = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
  radius = "small",
}) => {

  const radiusStyle = getRadiusStyle(radius);
  return (
    <TouchableOpacity
      style={[
        styles.button,
        radiusStyle,
        disabled ? styles.buttonDisabled : styles.buttonActive,
        buttonStyle, // optional override
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          disabled ? styles.textDisabled : styles.textActive,
          textStyle, // optional override
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
