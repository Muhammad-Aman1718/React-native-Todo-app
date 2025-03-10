import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const useSignOut = () => {
  const userSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'))
      .catch(error => console.error('Error signing out:', error));
  };

  return {
    userSignOut,
  };
};

export default useSignOut;
