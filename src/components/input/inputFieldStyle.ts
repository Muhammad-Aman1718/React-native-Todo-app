import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      rowGap: 4,
    },
    inputTitle: {
      fontSize: 12,
      color: COLORS.cylinderColor,
      lineHeight: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: COLORS.sliver,
      paddingHorizontal: 16,
      color: COLORS.cylinderColor,
      borderRadius: 4,
      fontSize: 16,
      lineHeight: 20,
      height: 50,
    },
  });