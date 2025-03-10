import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './splashStyle';
import {IMAGES} from '../../constant/images';

const Splash: React.FC = () => {
  return (
    <View style={styles.splash}>
      <Image style={styles.image} source={IMAGES.taskiLogo} />
    </View>
  );
};

export default Splash;
