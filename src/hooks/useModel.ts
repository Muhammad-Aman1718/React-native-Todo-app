import React, {useState} from 'react';
import useEditTask from './useEditTask';
import moment from 'moment';

const useModel = () => {
  const {date, setDate} = useEditTask();
  const [show, setShow] = useState<boolean>(false);
  const newDate = moment(date).format('MMM DD, YYYY');
  return {
    date,
    setDate,
    show,
    setShow,
    newDate,
  };
};

export default useModel;
