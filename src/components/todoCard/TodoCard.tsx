import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks/useRedux';
import {deleteTodo, updateId} from '../../store/slices/TodoSlice';
import {TodoData} from '../../types/types';
import moment from 'moment';
import {navigationProps} from '../../types/types';
import {COLORS} from '../../constant/colors';
import {styles} from './todoCardStyle';

const TodoCard = (props: {filterData: TodoData[]}) => {
  const [open, setOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState<string | null | undefined>(null);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<navigationProps>();

  const renderCard = ({item}: {item: TodoData}) => {
    const newDate = moment(item?.createdAt).format('MMMM D, YYYY');

    return (
      <View key={item?.id} style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{item?.title}</Text>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
              setOpenItemId(item.id);
            }}
            style={styles.options}>
            <Icon name="ellipsis-v" size={16} color={COLORS.nobel} />
          </TouchableOpacity>
          {open && openItemId === item?.id ? (
            <View style={styles.optionContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditTask');
                  dispatch(updateId(item?.id));
                  setOpen(false);
                }}>
                <Text style={styles.editTask}>Edit Task</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(deleteTodo(item?.id));
                }}>
                <Text style={styles.deleteTask}>Delete Task</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <Text style={styles.hide}>No Data</Text>
            </>
          )}
        </View>
        <Text style={styles.date}>{newDate}</Text>
        <Text style={styles.noteText}>{item?.notes}</Text>
        <Text
          style={item?.tags === 'Urgent' ? styles.urgentTag : styles.normalTag}>
          {item?.tags}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={props.filterData}
      renderItem={renderCard}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      refreshing={true}
      nestedScrollEnabled={true}
    />
  );
};

export default TodoCard;
