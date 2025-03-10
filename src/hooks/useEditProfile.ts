import {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {updateUser} from '../store/slices/AuthSlice';
import {NativeProp} from '../types/types';
import {useAppDispatch, useAppSelector} from './useRedux';

const useEditProfile = () => {
  const user = useAppSelector(state => state.authReducer.user);
  const dispatch = useAppDispatch();

  const navigation = useNavigation<NativeProp>();

  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleEditProfile = () => {
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      Alert.alert('Full name should only contain letters and spaces!');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Alert.alert('Please enter a valid email address!');
      return;
    }

    const updatedUser = {
      uid: auth().currentUser?.uid,
      fullName: fullName,
      email: email,
    };

    dispatch(updateUser(updatedUser))
      .unwrap()
      .then((updateUser) => {
      })
      .catch((error) => {
        console.error('Error updating user:', error.message);
      });

    navigation.goBack();
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    user,
    handleEditProfile,
  };
};

export default useEditProfile;
