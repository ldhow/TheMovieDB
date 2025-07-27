import { StyleSheet } from "react-native";
import { Colors } from "~/constants/colors";

export const styles = StyleSheet.create({
 overviewHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  backButton: {
    paddingVertical: 8,
    marginRight: 16
  },
  backIcon: {
    color: Colors.white
  },
  titleWrapper: {
    alignSelf: 'center',
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24, fontWeight: 'bold', color: Colors.white,
  },
  year: {
    fontWeight: '400',
    fontSize: 20
   },
});