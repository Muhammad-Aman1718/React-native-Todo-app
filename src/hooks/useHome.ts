import {useEffect, useState} from 'react';
import {TodoData} from '../types/types';
import {useAppDispatch, useAppSelector} from './useRedux';
import {getTodos} from '../store/slices/TodoSlice';

const useHome = () => {
  const [filteredData, setFilteredData] = useState<TodoData[]>([]);
  const Data = useAppSelector(store => store.todoReducer.todos) || null;
  const [isData, setIsData] = useState<boolean>(true);
  const [searchText, setSearchText] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(Data);
  }, [Data]);

  useEffect(() => {
    if (Data.length > 0) {
      setIsData(true);
    } else {
      setIsData(false);
    }
  }, [Data]);

  const handleFilter = (text: string) => {
    setSearchText(text);
    const filtered = Data.filter(data =>
      data.title?.toUpperCase().includes(text.toUpperCase()),
    );
    setFilteredData(filtered);
  };

  return {filteredData, setFilteredData, isData, searchText, handleFilter,};
};

export default useHome;
