import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: 20,
    },
    settingText: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24.4,
      color: COLORS.cylinderColor,
      textAlign: 'center',
    },
    profileData: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    data: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    nameEmail: {
      marginLeft: 24,
      rowGap: 4,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24.4,
      color: COLORS.cylinderColor,
    },
    userEmail: {
      fontSize: 14,
      lineHeight: 18.2,
      color: COLORS.cylinderColor,
      opacity: 70,
    },
  
    aboutBox: {
      backgroundColor: COLORS.gallery,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
  
    aboutText: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.gray3,
    },
    changePasswordSignOut: {
      marginTop: 15,
    },
    changePassword: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    hr: {
      backgroundColor: COLORS.gallery,
      height: 2,
      marginVertical: 10,
    },
    change: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.cylinderColor,
    },
    signOut: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.cardinal,
    },
  });