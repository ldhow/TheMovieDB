import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export 
const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonActive: {
    backgroundColor: Colors.primary,
  },
  buttonDisabled: {
    backgroundColor: Colors.disabled,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textActive: {
    color: Colors.white,
  },
  textDisabled: {
    color: Colors.textDisabled,
  },
});
