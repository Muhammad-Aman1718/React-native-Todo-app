import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 20,
  },

  headerSection: {
    alignItems: 'center',
  },
  middleSection: {
    alignItems: 'center',
  },
  buttonSection: {
    rowGap: '40',
  },
  buttonSectionText: {
    rowGap: '4',
    textAlign: 'center',
  },
  taskiText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32.6,
    textAlign: 'center',
  },
  secoundText: {
    fontSize: 14,
    lineHeight: 18.2,
    textAlign: 'center',
    color: COLORS.gray,
  },
  btns: {
    rowGap: '16',
  },
});
