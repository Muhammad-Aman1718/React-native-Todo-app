import React from 'react';
import {View, Image, Platform, KeyboardTypeOptions} from 'react-native';
import InputField from '../../components/input/InputField';
import Button from '../../components/button/Button';
import useEditProfile from '../../hooks/useEditProfile';
import Header from '../../components/header/Header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './editProfileStyle';
import {IMAGES} from '../../constant/images';
import {EDIT_PROFILE_INPUT_FIELDS} from '../../constant/constant';

const EditProfile = () => {
  const {fullName, setFullName, email, setEmail, handleEditProfile} =
    useEditProfile();

  const profileValues = {
    fullName,
    email,
  };

  const setProfileValues = {
    fullName: setFullName,
    email: setEmail,
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
          <Header title="Edit Profile" />
        </View>
        <Image style={styles.ProfileImg} source={IMAGES.profilePhoto} />
        <View style={styles.inputFields}>
          {EDIT_PROFILE_INPUT_FIELDS.map(
            ({key, title, placeholder, inputType, editAble}) => (
              <InputField
                key={key}
                inputTitle={title}
                placeholder={placeholder}
                inputType={inputType}
                value={profileValues[key]}
                onChangeText={text => setProfileValues[key](text)}
                editAble={editAble}
              />
            ),
          )}
        </View>
      </View>
      <Button onPress={handleEditProfile} title="Save Changes" />
    </KeyboardAwareScrollView>
  );
};

export default EditProfile;
