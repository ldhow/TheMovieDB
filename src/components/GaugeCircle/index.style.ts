import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: Colors.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  labelWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  percent: {
    fontSize: 12,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
});