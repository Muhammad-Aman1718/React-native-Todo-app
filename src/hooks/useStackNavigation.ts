import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const useStackNavigation = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  return {open, authenticated};
};

export default useStackNavigation;
