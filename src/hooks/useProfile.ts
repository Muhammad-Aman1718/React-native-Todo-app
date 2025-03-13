import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useRedux';
import useSignOut from './useSignOut';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../store/slices/AuthSlice';
import {navigationProps} from '../types/types';

const useProfile = () => {
  const user = useAppSelector(state => state.authReducer.user);
  const {userSignOut} = useSignOut();
  const dispatch = useAppDispatch();

  const navigation = useNavigation<navigationProps>();

  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .catch(error => {});
  }, [dispatch]);
  return {
    user,
    userSignOut,
    navigation,
  };
};

export default useProfile;
