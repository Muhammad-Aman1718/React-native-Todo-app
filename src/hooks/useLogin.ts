import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import toast from 'react-hot-toast';

export default function useLogin() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIp = async () => {
    if (
      !/^[a-zA-Z\s]+$/.test(fullName) ||
      !email.trim() ||
      !email.includes('@') ||
      !phoneNumber.trim() ||
      phoneNumber.length >= 11 ||
      password.length < 6
    ) {
      toast.error(
        !/^[a-zA-Z\s]+$/.test(fullName)
          ? 'Full name should only contain letters and spaces!'
          : !email.trim() || !email.includes('@')
          ? 'Email must be included and contain @!'
          : !phoneNumber.trim() || phoneNumber.length >= 11
          ? 'Please enter a valid 10-digit phone number!'
          : 'Password should be at least 6 characters long!',
      );
    } else {
      // ✅ Sab kuch sahi hai, aage process karo
      return;
    }

    const user = {
      fullName,
      email,
      phoneNumber,
      password,
    };

    try {
      await auth().signInWithEmailAndPassword(user.email, user.password);
      toast.success('welcome back, you are Sign In');
    } catch (error) {
      toast.error('Sorry, This user does not exist');
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
    handleSignIp,
  };
}
