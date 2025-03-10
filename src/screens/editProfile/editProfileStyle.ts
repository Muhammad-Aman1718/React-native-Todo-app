import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: 'white',
      justifyContent: 'space-between',
    },
    editText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
      lineHeight: 24.4,
      marginBottom: 30,
      textAlign: 'center',
    },
    ProfileImg: {
      width: 100,
      height: 100,
      marginBottom: 50,
      alignSelf: 'center',
    },
    inputFields: {
      rowGap: 20,
    },
  });