import React from 'react';
import {Text, TextInput, TouchableOpacity, View, Platform} from 'react-native';
import Button from '../../components/button/Button';
import InputField from '../../components/input/InputField';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import useAddTask from '../../hooks/useAddTask';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '../../constant/colors';
import {styles} from './addTaskStyle';
import modleFunction from '../../components/model/Model';
const AddTask = () => {
  const {
    title,
    setTitle,
    notes,
    setNotes,
    selectedTag,
    setSelectedTag,
    show,
    showDatePicker,
    handleAddTask,
    newDate,
  } = useAddTask();

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps={
        Platform.OS === 'android' ? 'handled' : 'always'
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <Text style={styles.addNewTaskText}>Add new task</Text>
        </View>
        <View style={styles.inputfields}>
          <InputField
            value={title}
            onChangeText={setTitle}
            inputTitle="Task Title"
            placeholder="Input task title..."
            inputType="default"
          />
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitles}>Notes</Text>
            <View style={styles.notesInputfield}>
              <TextInput
                value={notes}
                onChangeText={setNotes}
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
                placeholder="-Select tags-"
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
        <Button onPress={handleAddTask} title="Save Task" />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddTask;
