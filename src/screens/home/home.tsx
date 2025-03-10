import React from 'react';
import {Text, TouchableOpacity, View, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TodoCard from '../../components/todoCard/TodoCard';
import {COLORS} from '../../constant/colors';
import useHome from '../../hooks/useHome';
import {styles} from './homeStyle';
import {IMAGES} from '../../constant/images';

const Home = () => {
  const {searchText, handleFilter, isData, filteredData} = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.logoSection}>
          <TouchableOpacity>
            <Icon name="align-left" size={18} color={COLORS.nobel} />
          </TouchableOpacity>
          <Image style={styles.img} source={IMAGES.taskiLogo} />
          <TouchableOpacity>
            <Icon name="ellipsis-v" size={16} color={COLORS.nobel} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            value={searchText}
            onChangeText={text => handleFilter(text)}
            style={styles.input}
            placeholder="Search task here…"
            placeholderTextColor={COLORS.gray}
            keyboardType="default"
          />
          <Icon name="search" size={16} color={COLORS.nobel} />
        </View>
      </View>
      {isData ? (
        <TodoCard filterData={filteredData} />
      ) : (
        <View style={styles.middleSection}>
          <Image source={IMAGES.emptyState} />
          <Text style={styles.notaskText}>No Task</Text>
          <Text style={styles.middletext}>
            Looks like you dont have a task,
          </Text>
          <Text style={styles.middletext}> please add task</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
