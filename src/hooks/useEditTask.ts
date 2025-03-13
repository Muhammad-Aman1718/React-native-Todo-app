import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {updateTodo} from '../store/slices/TodoSlice';
import {NativeProp} from '../types/types';
import {useAppDispatch, useAppSelector} from './useRedux';
import toast from 'react-hot-toast';

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
  const newDate = moment(date).format('MMM DD, YYYY');
  const [show, setShow] = useState<boolean>(false);

  const showDatePicker = () => {
    setShow(true);
  };

  useEffect(() => {
    const newDate = moment(
      AllData?.createdAt,
      'MMMM D, YYYY - h:mm A',
    ).toDate();
    setDate(newDate);
  }, [AllData]);

  const handleEditTask = () => {
    if (!title?.trim()) {
      toast.error('Title is required');
    } else if (title.length <= 3) {
      toast.error('Title should be at least 4 characters long');
    } else if (!notes?.trim()) {
      toast.error('Notes are required');
    } else if (notes.length <= 5) {
      toast.error('Notes should be at least 6 characters long');
    } else if (selectedTag === '- Select tags -') {
      toast.error('Please select a valid tag');
    } else if (!date) {
      toast.error('Please select a date');
    } else if (new Date(date) < new Date()) {
      toast.error('You cannot select a past date');
    } else {
      // ✅ Sab kuch sahi hai, aage process karo
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
    newDate,
    show,
    setShow,
    showDatePicker,
    isDropdownVisible,
    setDropdownVisible,
  };
};

export default useEditTask;
