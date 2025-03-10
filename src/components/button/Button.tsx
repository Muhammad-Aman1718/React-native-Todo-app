import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import {ButtonTypeProps} from '../../types/types';
import { styles } from './buttonStyle';

const Button: React.FC<ButtonTypeProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        title === 'Register' ? styles.registerButton : styles.loginButton,
        buttonStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          title === 'Register' ? styles.registerText : styles.loginText,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};



export default Button;
