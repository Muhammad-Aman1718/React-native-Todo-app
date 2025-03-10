import {Alert} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function useLogin() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIp = async () => {
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      Alert.alert('Full name should only contain letters and spaces!');
      return;
    }
    if (email.trim() === '' || !email.includes('@')) {
      Alert.alert('Email must be included and contain @!');
      return;
    }
    if (phoneNumber.trim() === '' || phoneNumber.length >= 11) {
      Alert.alert('Please enter a valid 10-digit phone number!');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Password should be at least 6 characters long!');
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
      Alert.alert('welcome back, you are Sign In');
    } catch (error) {
      Alert.alert('Sorry, This user does not exist');
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
