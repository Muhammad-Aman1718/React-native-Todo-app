import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  TextStyle,
  ViewStyle,
  StyleProp,
  KeyboardTypeOptions,
} from 'react-native';
export type RootStackParam = {
  HomeScreen?: {
    screen?: 'Home' | 'Profile';
  };
};

export type RootStackParamList = {
  Home: {screen: string};
  Profile: {screen: string};
  EditProfile?: undefined;
  EditPassword?: undefined;
  Splash: undefined;
  GetStart: undefined;
  Login: undefined;
  Register: undefined;
  AddNewTask: undefined;
  BottomTab: undefined;
  EditTask: undefined;
};

export type NativePropsHome = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type navigationProps = NativeStackNavigationProp<RootStackParamList>;

export type NativeProp = BottomTabNavigationProp<RootStackParamList, 'Profile'>;

export type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export interface LoginPayload {
  email: string;
  password: string;
}

export interface TodoData {
  id?: string;
  title?: string;
  notes?: string;
  tags?: string;
  createdAt?: Date;
}

export interface TodosState {
  todos: TodoData[];
  updateTodos: TodoData | null | undefined;
}

export interface User {
  fullName: string;
  email: string;
  phone: number;
  password: string;
}

export interface CreateUserResponseData {
  id: string;
  fullName: string;
  email: string;
  phone: number;
}

export interface UserDataState {
  uid: number | string;
  fullName: string;
  email: string;
  phone: number | null;
  password: string | null;
  user: CreateUserResponseData | null;
}

export interface Update {
  uid?: string | undefined;
  fullName?: string | undefined;
  email?: string | undefined;
}

export interface ButtonTypeProps {
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
}

export interface TextInputTypesProps {
  inputTitle?: string;
  input?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  editAble?: boolean;
  inputType?: KeyboardTypeOptions;
}

export interface DayEvent {
  day?: number;
  month?: number;
  year?: number;
  timestamp?: number;
  dateString: string;
}

export type TabScreen = {
  Home: undefined;
  Profile: undefined;
  AddTask: undefined;
};
