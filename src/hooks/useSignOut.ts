import auth from '@react-native-firebase/auth';
import toast from 'react-hot-toast';

const useSignOut = () => {
  const userSignOut = () => {
    auth()
      .signOut()
      .then(() => toast.success('User signed out!'))
      .catch(error => console.error('Error signing out:', error));
  };

  return {
    userSignOut,
  };
};

export default useSignOut;
