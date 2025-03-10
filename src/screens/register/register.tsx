import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import useRegister from '../../hooks/useRegister';
import Header from '../../components/header/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAppDispatch} from '../../hooks/useRedux';
import {signInWithGoogle} from '../../store/slices/AuthSlice';
import {Props} from '../../types/types';
import {COLORS} from '../../constant/colors';
import {styles} from './registerStyle';
import {REGISTER_INPUT_FIELDS} from '../../constant/constant';

const Register: React.FC<Props> = ({navigation}) => {
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
    isCheck,
    setIsCheck,
    handleSignUp,
  } = useRegister();
  const registerValues = {
    fullName,
    email,
    phoneNumber,
    password,
  };

  const setRegisterValues = {
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
      <View>
        <View>
          <Header title="Register" />
        </View>
        <View style={styles.joinUsText}>
          <Text style={styles.joinText}>Join us today.</Text>
          <Text style={styles.afterJoinUsText}>
            Its Nice too see you, lets start
          </Text>
        </View>
        <View style={styles.inputfields}>
          {REGISTER_INPUT_FIELDS.map(
            ({key, inputTitle, placeholder, inputType}) => (
              <InputField
                key={key}
                inputTitle={inputTitle}
                placeholder={placeholder}
                inputType={inputType}
                value={registerValues[key]}
                onChangeText={text => setRegisterValues[key](text)}
              />
            ),
          )}
          <View style={styles.checkBoxAutrized}>
            <TouchableOpacity
              style={[
                styles.checkBox,
                isCheck ? styles.checked : styles.unchecked,
              ]}
              onPress={() => setIsCheck(!isCheck)}>
              {isCheck && <Icon name="check" size={18} color={COLORS.white} />}
            </TouchableOpacity>
            <Text style={styles.agreeText}>I Agree with </Text>
            <Text style={styles.termsText}>Terms and Conditions</Text>
          </View>
        </View>
      </View>
      <View style={styles.RegisterButton}>
        <TouchableOpacity
          style={styles.signInWithGoogle}
          onPress={() => dispatch(signInWithGoogle())}>
          <Icon2 name="google" color="black" size={25} />
          <Text style={styles.signInWithGoogleText}>Sign-in with Google</Text>
        </TouchableOpacity>
        <Button
          buttonStyle={styles.registerButtonProps}
          textStyle={styles.registerTextProps}
          title="Register"
          onPress={handleSignUp}
        />
        <Text style={styles.AccountRegisterText}>
          <Text> Already have Account?</Text>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.LoginText}>
            Login
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
