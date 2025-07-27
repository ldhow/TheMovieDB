import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle, View } from "react-native";
import { styles } from "./index.style";
import { Radius } from "~/types/style";
import { getRadiusStyle } from "~/utils/style";

export type IButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  radius?: Radius;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";

};

const StyledButton: React.FC<IButtonProps> = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
  radius = "small",
  icon,
  iconPosition = "left",
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
      <View style={styles.inner}>
         {icon && iconPosition === "left" && (
          <View style={{ marginRight: 8 }}>{icon}</View>
        )}
        <Text
          style={[
            styles.text,
            disabled ? styles.textDisabled : styles.textActive,
            textStyle, // optional override
          ]}
        >
          {title}
        </Text>
        {icon && iconPosition === "right" && (
          <View style={{ marginLeft: 8 }}>{icon}</View>
        )}
     </View>
    </TouchableOpacity>
  );
};

export default StyledButton;
