import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      justifyContent: 'space-between',
      padding: 20,
    },
    addNewTaskText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
      lineHeight: 24.4,
      textAlign: 'center',
    },
    selectTags: {
      color: COLORS.gray,
    },
    inputfields: {
      rowGap: 16,
    },
    inputTitles: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.cylinderColor,
    },
    inputContainer: {
      rowGap: 4,
    },
    notesInputfield: {
      borderWidth: 1,
      borderColor: COLORS.sliver,
      paddingHorizontal: 16,
      color: COLORS.cylinderColor,
      borderRadius: 4,
      justifyContent: 'flex-start',
      height: 90,
      fontSize: 16,
      lineHeight: 20,
    },
    notesField: {
      fontSize: 14,
      lineHeight: 18.4,
    },
    addNewTaskPickerContainer: {
      borderWidth: 1,
      borderColor: COLORS.sliver,
      borderRadius: 4,
      fontSize: 16,
      lineHeight: 20,
    },
    remindText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
    },
    maindateTime: {
      borderWidth: 1,
      borderColor: COLORS.alto,
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 16,
      rowGap: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dateTime: {
      rowGap: 10,
    },
    dateTimeTitle: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.nobel,
    },
    date: {
      fontSize: 16,
      lineHeight: 22.4,
      fontWeight: 'bold',
      color: COLORS.cylinderColor,
    },
  
    modelcontainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    line: {
      height: 3,
      borderRadius: 5,
      backgroundColor: COLORS.alto2,
      width: 35,
      marginHorizontal: 'auto',
      marginBottom: 10,
    },
    modelDiv: {
      backgroundColor: COLORS.white,
      width: '100%',
      height: 'auto',
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 20,
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    titleModel: {
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: 23,
      marginVertical: 10,
    },
    calendar: {
      borderRadius: 10,
      overflow: 'hidden',
    },
    selectedDate: {
      fontSize: 16,
      color: COLORS.mineShaft,
      fontWeight: '700',
      textAlign: 'center',
      marginVertical: 15,
    },
    noDateSelected: {
      fontSize: 16,
      color: COLORS.gray2,
      textAlign: 'center',
      marginVertical: 10,
    },
    modelText: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical: 20,
      textAlign: 'center',
      lineHeight: 24,
    },
  });