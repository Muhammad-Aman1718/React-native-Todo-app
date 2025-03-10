import React, {useState} from 'react';
import {addTodo} from '../store/slices/TodoSlice';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativePropsHome} from '../types/types';
import {Alert} from 'react-native';
import {useAppDispatch} from './useRedux';
import moment from 'moment';

const useAddTask = () => {
  const dispatch = useAppDispatch();
  const Navigation = useNavigation<NativePropsHome>();
  const user = auth().currentUser?.uid;
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('- Select tags -');
  const [date, setDate] = useState<Date>(new Date());

  const showDatePicker = () => {
    setShow(true);
  };

  const handleAddTask = () => {
    if (title === undefined || title?.trim() === '') {
      Alert.alert('Title is required');
      return;
    }
    if (title.length <= 3) {
      Alert.alert('Title should be at least 4 characters long');
      return;
    }
    if (notes === undefined || notes.trim() === '') {
      Alert.alert('Notes are required');
      return;
    }
    if (notes.length <= 5) {
      Alert.alert('Notes should be at least 6 characters long');
      return;
    }
    if (selectedTag === '- Select tags -') {
      Alert.alert('Please select a valid tag');
      return;
    }
    if (!date) {
      Alert.alert('Please select a date');
      return;
    }
    if (new Date(date) < new Date()) {
      Alert.alert('You cannot select a past date');
      return;
    }

    let data = {
      user_id: user,
      title: title,
      notes: notes,
      tags: selectedTag,
      createdAt: date,
    };

    dispatch(addTodo(data));
    Navigation.navigate('Home', {screen: 'Home'});
    setTitle('');
    setNotes('');
    setSelectedTag('- Select tags -');
    setDate(new Date());
  };

  const newDate = moment(date).format('MMM DD, YYYY');

  return {
    title,
    setTitle,
    notes,
    setNotes,
    selectedTag,
    setSelectedTag,
    date,
    setDate,
    show,
    setShow,
    showDatePicker,
    handleAddTask,
    newDate,
  };
};

export default useAddTask;
