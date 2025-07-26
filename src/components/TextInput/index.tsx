import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./index.style";
import { globalStyles } from "~/theme/globalStyle";

const StyledTextInput: React.FC<TextInputProps> = (props) => {
  return <TextInput {...props} style={[globalStyles.boxShadow, props.style, styles.input]} />;
};

export default StyledTextInput;
