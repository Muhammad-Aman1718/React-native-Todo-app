import React from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import useLogin from '../../hooks/useLogin';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Header from '../../components/header/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '../../hooks/useRedux';
import {signInWithGoogle} from '../../store/slices/AuthSlice';
import {Props} from '../../types/types';
import {styles} from './loignStyle';
import {LOGIN_INPUT_FIELDS} from '../../constant/constant';

const Login: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    handleSignIp,
  } = useLogin();

  const loginValues = {
    fullName,
    email,
    phoneNumber,
    password,
  };

  const setLoginValues = {
    fullName: setFullName,
    email: setEmail,
    phoneNumber: setPhoneNumber,
    password: setPassword,
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={
        Platform.OS === 'android' ? 'handled' : 'always'
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.innerContainer}>
        <View>
          <View>
            <Header title="Login" />
          </View>
          <View style={styles.welcomeBackText}>
            <Text style={styles.welcomeText}>Welcome Back.</Text>
            <Text style={styles.afterWelcomeText}>
              Its Nice too see you again, lets get going
            </Text>
          </View>
          <View style={styles.inputfields}>
            {LOGIN_INPUT_FIELDS.map(({key, title, placeholder, inputType}) => (
              <InputField
                key={key}
                inputTitle={title}
                placeholder={placeholder}
                inputType={inputType}
                value={loginValues[key]}
                onChangeText={text => setLoginValues[key](text)}
              />
            ))}
          </View>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity
            style={styles.signInWithGoogle}
            onPress={() => dispatch(signInWithGoogle())}>
            <Icon2 name="google" color="black" size={25} />
            <Text style={styles.signInWithGoogleText}>Sign-in with Google</Text>
          </TouchableOpacity>
          <Button onPress={handleSignIp} title="Login" />
          <Text style={styles.AccountRegisterText}>
            Don't have an account?
            <Text
              onPress={() => navigation.navigate('Register')}
              style={styles.registerText}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
