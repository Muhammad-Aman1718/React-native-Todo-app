import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      rowGap: 5,
      backgroundColor: 'white',
      marginBottom: 20,
      alignItems: 'flex-start',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    titleText: {
      color: COLORS.cylinderColor,
      fontSize: 16,
      lineHeight: 19.36,
      fontWeight: 'bold',
    },
    date: {
      fontSize: 12,
      lineHeight: 14.52,
      color: COLORS.alto,
    },
    options: {},
    optionContainer: {
      position: 'absolute',
      borderRadius: 4,
      width: 92,
      height: 62,
      zIndex: 1,
      top: 15,
      right: 7,
      shadowColor: COLORS.black,
      shadowOpacity: 0.9,
      elevation: 4,
      shadowRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
  
    editTask: {
      color: COLORS.gray,
      opacity: 0.7,
      fontSize: 12,
      lineHeight: 18.2,
    },
    line: {
      backgroundColor: COLORS.scarpaFlow,
      width: 75,
      height: 0.5,
    },
    deleteTask: {
      fontSize: 12,
      lineHeight: 18.2,
      color: COLORS.cardinal,
    },
  
    noteText: {
      fontSize: 12,
      lineHeight: 18,
      color: COLORS.gray,
      opacity: 0.7,
    },
    normalTag: {
      backgroundColor: COLORS.dodgerBlue,
      color: 'white',
      paddingVertical: 4,
      paddingHorizontal: 8,
      fontSize: 10,
      marginTop: 5,
      lineHeight: 12.1,
      borderRadius: 3,
    },
    urgentTag: {
      backgroundColor: COLORS.cardinal,
      color: 'white',
      paddingVertical: 4,
      paddingHorizontal: 8,
      fontSize: 10,
      marginTop: 5,
      lineHeight: 12.1,
      alignContent: 'flex-start',
      borderRadius: 3,
    },
  
    hide: {
      display: 'none',
    },
  });
  