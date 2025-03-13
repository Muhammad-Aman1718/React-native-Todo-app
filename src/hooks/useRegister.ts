import {useState} from 'react';
import {signUpUser} from '../store/slices/AuthSlice';
import {useAppDispatch} from './useRedux';
import toast from 'react-hot-toast';

export default function useRegister() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSignUp = async () => {
    if (
      !/^[a-zA-Z\s]+$/.test(fullName) ||
      email === '' ||
      !email.includes('@') ||
      !phoneNumber ||
      phoneNumber.toString().length !== 11 ||
      !password ||
      password.length < 6 ||
      !isCheck
    ) {
      toast.error(
        !/^[a-zA-Z\s]+$/.test(fullName)
          ? 'Full name should only contain letters and spaces!'
          : email === '' || !email.includes('@')
          ? 'A valid email is required!'
          : !phoneNumber || phoneNumber.toString().length !== 11
          ? 'Please enter a valid 11-digit phone number!'
          : !password || password.length < 6
          ? 'Password should be at least 6 characters long!'
          : 'Please agree to the Terms & Conditions',
      );
      return;
    }

    const user = {
      fullName,
      email,
      phone: phoneNumber,
      password,
    };

    try {
      await dispatch(signUpUser(user));
    } catch (error) {
      toast.error('Error creating user:', error);
    }
  };

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    isCheck,
    setIsCheck,
    dispatch,
    handleSignUp,
  };
}
