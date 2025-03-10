import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      justifyContent: 'space-between',
      padding: 20,
    },
    joinUsText: {
      marginBottom: 40,
    },
    joinText: {
      fontSize: 24,
      lineHeight: 32.6,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
    },
    afterJoinUsText: {
      fontSize: 14,
      lineHeight: 18.2,
      color: COLORS.gray,
    },
    inputfields: {
      rowGap: 16,
    },
    checkBoxAutrized: {
      marginBottom: 16,
      flexDirection: 'row',
    },
    checkBox: {
      borderWidth: 1,
      borderColor: COLORS.sliver,
      width: 20,
      height: 20,
      borderRadius: 4,
    },
    checked: {
      backgroundColor: COLORS.greenColor,
      borderColor: COLORS.greenColor,
    },
    unchecked: {
      backgroundColor: COLORS.white,
    },
    agreeText: {
      color: COLORS.gray,
      fontSize: 14,
      lineHeight: 16.94,
      marginLeft: 10,
    },
    termsText: {
      color: COLORS.greenColor,
      fontSize: 14,
      lineHeight: 16.94,
    },
    AccountRegisterText: {
      fontSize: 14,
      lineHeight: 18.2,
      textAlign: 'center',
      marginTop: 24,
      columnGap: 2,
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
    RegisterButton: {
      marginTop: 24,
      rowGap: 10,
    },
    registerButtonProps: {
      backgroundColor: COLORS.greenColor,
    },
    registerTextProps: {
      color: 'white',
    },
    LoginText: {
      color: COLORS.greenColor,
      fontSize: 14,
      lineHeight: 18.2,
      textDecorationLine: 'underline',
    },
  });