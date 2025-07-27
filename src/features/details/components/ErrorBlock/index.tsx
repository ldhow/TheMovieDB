import { FC } from "react";
import { View } from "react-native";
import ErrorBadge from "~/components/Badge";
import { styles } from "./index.style";
import { StyledButton } from "~/components";

interface IErrorBlockProps {
  message: string;
  handleBack: () => void;
}

const ErrorBlock: FC<IErrorBlockProps> = ({ message, handleBack }) => {
  return (
    <View style={styles.errorContainer}>
      <ErrorBadge message={message} />
      <StyledButton title={"Back"} onPress={handleBack} />
    </View>
  );
};

export default ErrorBlock;
