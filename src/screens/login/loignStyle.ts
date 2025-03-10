import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between',
    },
    loginText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
      lineHeight: 24.4,
      textAlign: 'center',
    },
    welcomeBackText: {
      marginBottom: 40,
    },
    welcomeText: {
      fontSize: 24,
      lineHeight: 32.6,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
    },
    afterWelcomeText: {
      fontSize: 14,
      lineHeight: 18.2,
      color: COLORS.gray,
    },
    inputfields: {
      rowGap: 16,
    },
    AccountRegisterText: {
      fontSize: 14,
      lineHeight: 18.2,
      textAlign: 'center',
      marginTop: 24,
    },
    signInWithGoogle: {
      columnGap: 20,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
      backgroundColor: COLORS.gallery,
      justifyContent: 'center',
    },
    signInWithGoogleText: {
      fontSize: 16,
      lineHeight: 22.5,
      fontWeight: 'bold',
    },
    loginButton: {
      marginTop: 24,
      rowGap: 10,
    },
    registerText: {
      color: COLORS.greenColor,
      fontSize: 14,
      lineHeight: 18.2,
      textDecorationLine: 'underline',
    },
  });