import {useEffect, useState} from 'react';
import {NativeProp} from '../types/types';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../store/slices/AuthSlice';
import {useAppDispatch} from './useRedux';
import toast from 'react-hot-toast';

const useChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const navigation = useNavigation<NativeProp>();

  const user = auth().currentUser;

  const handleChangePassword = async () => {
    if (
      !oldPassword ||
      oldPassword.length < 6 ||
      !newPassword ||
      newPassword.length < 6 ||
      !confirmNewPassword ||
      confirmNewPassword.length < 6 ||
      newPassword !== confirmNewPassword ||
      !user
    ) {
      toast.error(
        !oldPassword
          ? 'Old password is required'
          : oldPassword.length < 6
          ? 'Old password must be at least 6 characters long'
          : !newPassword
          ? 'New password is required'
          : newPassword.length < 6
          ? 'New password must be at least 6 characters long'
          : !confirmNewPassword
          ? 'Please confirm your new password'
          : confirmNewPassword.length < 6
          ? 'Confirm new password must be at least 6 characters long'
          : newPassword !== confirmNewPassword
          ? 'New password and confirm password do not match'
          : 'User is not logged in',
      );
      return;
    }

    try {
      const credential = auth.EmailAuthProvider.credential(
        user.email!,
        oldPassword,
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      toast.success('Password Updated Successfully!');
      navigation.goBack();
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error('The old password entered is incorrect. Please try again.');
      } else if (error.code === 'auth/invalid-credential') {
        toast.error(
          'The provided old password is invalid. Please check and try again.',
        );
      } else if (error.code === 'auth/network-request-failed') {
        toast.error(
          'There was a network error. Please check your internet connection and try again.',
        );
      }
    }
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    handleChangePassword,
  };
};

export default useChangePassword;
