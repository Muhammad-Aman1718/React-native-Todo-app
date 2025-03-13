import React, {useState} from 'react';
import {addTodo} from '../store/slices/TodoSlice';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {NativePropsHome} from '../types/types';
import {useAppDispatch} from './useRedux';
import moment from 'moment';
import toast from 'react-hot-toast';

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
    if (
      !title?.trim() ||
      title.length <= 3 ||
      !notes?.trim() ||
      notes.length <= 5 ||
      selectedTag === '- Select tags -' ||
      !date ||
      new Date(date) < new Date()
    ) {
      toast.error(
        !title?.trim()
          ? 'Title is required'
          : title.length <= 3
          ? 'Title should be at least 4 characters long'
          : !notes?.trim()
          ? 'Notes are required'
          : notes.length <= 5
          ? 'Notes should be at least 6 characters long'
          : selectedTag === '- Select tags -'
          ? 'Please select a valid tag'
          : !date
          ? 'Please select a date'
          : 'You cannot select a past date',
      );
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
