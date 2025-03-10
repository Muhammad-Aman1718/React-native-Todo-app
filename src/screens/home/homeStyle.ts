import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: 20,
    },
    upperSection: {
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    logoSection: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    img: {
      width: 70,
      height: 20,
      resizeMode: 'contain',
    },
    searchBar: {
      borderWidth: 1,
      borderColor: COLORS.nobel,
      borderRadius: 4,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      fontSize: 14,
    },
  
    filteredSection: {
      padding: 20,
    },
    middleSection: {
      alignItems: 'center',
      marginVertical: 'auto',
    },
    notaskText: {
      fontSize: 18,
      fontWeight: 'bold',
      lineHeight: 24.4,
      marginBottom: 8,
    },
    middletext: {
      fontSize: 14,
      lineHeight: 18.2,
      color: COLORS.gray,
    },
  
    bottomSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  
    bottomButtons: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 12,
      lineHeight: 16,
      color: COLORS.nobel,
    },
  });