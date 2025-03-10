import React from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constant/colors';
import {styles} from './headerStyle';

export type RootStackParam = {
  HomeScreen?: {
    screen?: 'Home' | 'Profile';
  };
};
export type NativeProp = BottomTabNavigationProp<RootStackParam>;

type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation<NativeProp>();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.flexSection}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrowleft" size={24} color={COLORS.nobel} />
      </TouchableOpacity>
      <View>
        <Text style={styles.profile}>{title}</Text>
      </View>
      <Text> </Text>
    </View>
  );
};

export default Header;
