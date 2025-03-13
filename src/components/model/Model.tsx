import {
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  View,
  Text,
} from 'react-native';
import {COLORS} from '../../constant/colors';
import {Calendar} from 'react-native-calendars';
import Button from '../button/Button';
import moment from 'moment';
import {styles} from '../../screens/editTask.tsx/editTaskStyle';
import {DayEvent} from '../../types/types';
import useModel from '../../hooks/useModel';

const modleFunction = () => {
  const {date, setDate, show, setShow, newDate} = useModel();

  return (
    <Modal transparent={true} animationType="slide" visible={show}>
      <TouchableWithoutFeedback onPress={() => setShow(false)}>
        <Animated.View style={styles.modelcontainer} />
      </TouchableWithoutFeedback>
      <View>
        <View style={styles.modelDiv}>
          <TouchableOpacity
            style={styles.line}
            onPress={() => setShow(false)}></TouchableOpacity>
          <Text style={styles.titleModel}>Add Date</Text>
          <Calendar
            style={styles.calendar}
            theme={{
              backgroundColor: COLORS.white,
              calendarBackground: COLORS.white,
              textSectionTitleColor: COLORS.heather,
              textSectionTitleDisabledColor: COLORS.mystic,
              selectedDayBackgroundColor: 'green',
              selectedDayTextColor: 'green',
              todayTextColor: 'green',
              dayTextColor: COLORS.pickledBluewood,
              textDisabledColor: COLORS.mystic,
              dotColor: COLORS.cerulean,
              selectedDotColor: COLORS.white,
              arrowColor: COLORS.pickledBluewood,
              disabledArrowColor: COLORS.mystic,
              monthTextColor: COLORS.black,
              textMonthFontWeight: 'bold',
              textDayFontWeight: '300',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 14,
            }}
            monthFormat={'MMMM'}
            firstDay={1}
            hideExtraDays={true}
            minDate={new Date().toISOString().split('T')[0]}
            onDayPress={(day: DayEvent) => {
              setDate(moment(day.dateString, 'YYYY-MM-DD').toDate());
            }}
          />
          {newDate && <Text style={styles.selectedDate}>{newDate}</Text>}
          <Button title="Set Date & Time" onPress={() => setShow(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default modleFunction;
