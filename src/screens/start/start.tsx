import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/button/Button';
import {Props} from '../../types/types';
import {styles} from './startStyle';
import {IMAGES} from '../../constant/images';

const GetStart: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Image source={IMAGES.taskiLogo} />
      </View>
      <View style={styles.middleSection}>
        <Image source={IMAGES.startImg} />
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.buttonSectionText}>
          <Text style={styles.taskiText}>Start with taski</Text>
          <Text style={styles.secoundText}>
            Join us now and get your daily things right
          </Text>
        </View>
        <View style={styles.btns}>
          <Button onPress={() => navigation.navigate('Login')} title="Login" />
          <Button
            onPress={() => navigation.navigate('Register')}
            title="Register"
          />
        </View>
      </View>
    </View>
  );
};

export default GetStart;
