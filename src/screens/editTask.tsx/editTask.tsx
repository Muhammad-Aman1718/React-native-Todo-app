import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import Header from '../../components/header/Header';
import useEditTask from '../../hooks/useEditTask';
import {COLORS} from '../../constant/colors';
import {styles} from './editTaskStyle';
import modleFunction from '../../components/model/Model';

const EditTask = () => {
  const {
    title,
    setTitle,
    notes,
    setNotes,
    selectedTag,
    setSelectedTag,
    newDate,
    show,
    setShow,
    showDatePicker,
    handleEditTask,
  } = useEditTask();

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Header title="Edit Task" />
        </View>

        <View style={styles.inputfields}>
          <InputField
            value={title}
            onChangeText={text => setTitle(text)}
            inputTitle="Task Title"
            placeholder="Input task title..."
            inputType="default"
          />
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitles}>Notes</Text>
            <View style={styles.notesInputfield}>
              <TextInput
                value={notes}
                onChangeText={text => setNotes(text)}
                style={styles.notesField}
                placeholder="Input task notes…"
                placeholderTextColor={COLORS.gray}
                keyboardType="default"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitles}>Tags</Text>
            <View style={styles.addNewTaskPickerContainer}>
              <Picker
                selectedValue={selectedTag}
                style={styles.selectTags}
                onValueChange={itemValue => setSelectedTag(itemValue)}>
                <Picker.Item label="-Select tags-" value="-Select tags-" />
                <Picker.Item label="Urgent" value="Urgent" />
                <Picker.Item label="Normal" value="Normal" />
              </Picker>
            </View>
          </View>

          <View>
            <Text style={styles.remindText}>Remind me</Text>
            <View style={styles.maindateTime}>
              <View style={styles.dateTime}>
                <Text style={styles.dateTimeTitle}>Date & Time</Text>
                {show && modleFunction()}
                <Text style={styles.date}>{newDate}</Text>
              </View>
              <TouchableOpacity onPress={showDatePicker}>
                <Icon name="edit" size={20} color={COLORS.nobel} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Button onPress={handleEditTask} title="Save Task" />
      </View>
    </View>
  );
};

export default EditTask;
