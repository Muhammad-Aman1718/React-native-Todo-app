import React from 'react';
import {Platform, View} from 'react-native';
import InputField from '../../components/input/InputField';
import Button from '../../components/button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/header/Header';
import useChangePassword from '../../hooks/useChangePassword';
import {styles} from './editPasswordStyle';
import {EDIT_PASSWORD_INPUT_FIELDS} from '../../constant/constant';

const EditPassword = () => {
  const {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    handleChangePassword,
  } = useChangePassword();

  const passwordValues = {
    oldPassword,
    newPassword,
    confirmNewPassword,
  };

  const setPasswordValues = {
    oldPassword: setOldPassword,
    newPassword: setNewPassword,
    confirmNewPassword: setConfirmNewPassword,
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={
        Platform.OS === 'android' ? 'handled' : 'always'
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <Header title="Edit Password" />
        <View style={styles.inputsFields}>
          {EDIT_PASSWORD_INPUT_FIELDS.map(({key, title, placeholder}) => (
            <InputField
              key={key}
              inputType="number-pad"
              inputTitle={title}
              placeholder={placeholder}
              value={passwordValues[key]}
              onChangeText={text => setPasswordValues[key](text)}
            />
          ))}
        </View>
      </View>
      <View>
        <Button onPress={handleChangePassword} title="Change password" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default EditPassword;
