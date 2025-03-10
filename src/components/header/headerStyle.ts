import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 30,
    },
    flexSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
    profile: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700',
      color: COLORS.cylinderColor,
      lineHeight: 24,
    },
  });