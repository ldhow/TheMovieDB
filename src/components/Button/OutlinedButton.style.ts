import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export
  const styles = StyleSheet.create({
    outlined: {
      marginTop: 16,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: Colors.primary,
      borderWidth: 1,
      borderColor: Colors.white,
      borderRadius: 4,
      alignSelf: 'flex-start',
    },
  });
