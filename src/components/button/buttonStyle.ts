import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    loginButton: {
      backgroundColor: COLORS.greenColor,
      color: 'white',
      padding: 10,
      borderRadius: 4,
    },
    loginText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 22.4,
    },
    registerButton: {
      backgroundColor: COLORS.white,
      borderColor: COLORS.greenColor,
      borderWidth: 1,
      color: 'white',
      padding: 10,
      borderRadius: 4,
    },
    registerText: {
      textAlign: 'center',
      color: COLORS.greenColor,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 22.4,
    },
  });