import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {Alert} from 'react-native';
import {updateTodo} from '../store/slices/TodoSlice';
import {NativeProp} from '../types/types';
import {useAppDispatch, useAppSelector} from './useRedux';

const useEditTask = () => {
  const AllData =
    useAppSelector(store => store.todoReducer.updateTodos) || null;
  const Navigation = useNavigation<NativeProp>();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string | undefined>(AllData?.title);
  const [notes, setNotes] = useState<string | undefined>(AllData?.notes);
  const [selectedTag, setSelectedTag] = useState<string | undefined>(
    AllData?.tags,
  );
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    const newDate = moment(
      AllData?.createdAt,
      'MMMM D, YYYY - h:mm A',
    ).toDate();
    setDate(newDate);
  }, [AllData]);

  const handleEditTask = () => {
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
      id: AllData?.id,
      title: title,
      notes: notes,
      tags: selectedTag,
      createdAt: date,
    };
    dispatch(updateTodo(data));
    Navigation.goBack();

    setTitle('');
    setNotes('');
    setSelectedTag('- Select tags -');
    setDate(new Date());
  };
  return {
    title,
    setTitle,
    notes,
    setNotes,
    selectedTag,
    setSelectedTag,
    date,
    setDate,
    handleEditTask,
    open,
    setOpen,
    isDropdownVisible,
    setDropdownVisible,
  };
};

export default useEditTask;
