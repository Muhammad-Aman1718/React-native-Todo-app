import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputTypesProps} from '../../types/types';
import {COLORS} from '../../constant/colors';
import { styles } from './inputFieldStyle';

const InputField: React.FC<TextInputTypesProps> = ({
  inputTitle,
  placeholder,
  inputType,
  value,
  editAble,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{inputTitle}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        keyboardType={inputType}
        value={value}
        onChangeText={value => onChangeText?.(value)}
        editable={editAble}
      />
    </View>
  );
};



export default InputField;
