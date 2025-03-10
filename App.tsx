import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stackNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App(): React.JSX.Element {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
export default App;
