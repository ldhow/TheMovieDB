import React from "react";
import StyledButton, { IButtonProps } from ".";
import { styles } from "./OutlinedButton.style";

const OutlinedButton: React.FC<IButtonProps> = (props) => {
  return <StyledButton {...props} buttonStyle={styles.outlined} />;
};

export default OutlinedButton;
