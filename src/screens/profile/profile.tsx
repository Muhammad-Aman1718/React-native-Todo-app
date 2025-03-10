import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import UseSignOut from '../../hooks/useSignOut';
import {getUser} from '../../store/slices/AuthSlice';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {useNavigation} from '@react-navigation/native';
import {navigationProps} from '../../types/types';
import {COLORS} from '../../constant/colors';
import {styles} from './profileStyle';
import {IMAGES} from '../../constant/images';
import {SCREEN} from '../../constant/screens';

const Profile = () => {
  const user = useAppSelector(state => state.authReducer.user);
  const {userSignOut} = UseSignOut();
  const dispatch = useAppDispatch();

  const navigation = useNavigation<navigationProps>();

  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .catch(error => {});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.settingText}>Setting</Text>
      </View>
      <View style={styles.profileData}>
        <View style={styles.data}>
          <Image source={IMAGES.profilePhoto} />
          <View style={styles.nameEmail}>
            <Text style={styles.userName}>
              {user?.fullName.slice(0, 10) + '...' || 'user name not find '}
            </Text>
            <Text style={styles.userEmail}>
              {user?.email.slice(0, 17) + '...' || 'user email not find '}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.EDIT_PROFILE)}>
          <Icon name="edit" size={16} color={COLORS.nobel} />
        </TouchableOpacity>
      </View>

      <View style={styles.aboutBox}>
        <Text style={styles.aboutText}>About</Text>
      </View>

      <View style={styles.changePasswordSignOut}>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.EDIT_PASSWORD)}
          style={styles.changePassword}>
          <Text style={styles.change}>Change Password</Text>
          <Icon2 name="chevron-small-right" size={20} color={COLORS.nobel} />
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity onPress={userSignOut}>
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
