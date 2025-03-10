import AddTask from '../screens/addTask/addTask';
import EditProfile from '../screens/editProfile/editProfile';
import {RootStackParamList, TabScreen} from '../types/types';
import EditTask from '../screens/editTask.tsx/editTask';
import EditPassword from '../screens/editPassword/editPassword';
import Home from '../screens/home/home';
import BottomTabNavigation from '../navigation/bottomNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import Register from '../screens/register/register';
import GetStart from '../screens/start/start';
import Profile from '../screens/profile/profile';
export const SCREENS: {name: keyof RootStackParamList; component: React.FC}[] =
  [
    {name: 'BottomTab', component: BottomTabNavigation},
    {name: 'EditProfile', component: EditProfile},
    {name: 'AddNewTask', component: AddTask},
    {name: 'EditTask', component: EditTask},
    {name: 'EditPassword', component: EditPassword},
    {name: 'Home', component: Home},
  ];

export const AUTH_SCREENS: {
  name: keyof RootStackParamList;
  component: React.FC<
    NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>
  >;
}[] = [
  {name: 'GetStart', component: GetStart as React.FC},
  {name: 'Login', component: Login as React.FC},
  {name: 'Register', component: Register as React.FC},
];

export const TABS: {
  name: keyof TabScreen;
  component: React.FC;
  icon: string;
}[] = [
  {name: 'Home', component: Home, icon: 'home'},
  {name: 'AddTask', component: AddTask, icon: 'home'},
  {name: 'Profile', component: Profile, icon: 'home'},
];

export const EDIT_PASSWORD_INPUT_FIELDS = [
  {
    key: 'oldPassword',
    title: 'Old Password',
    placeholder: 'Enter your old password',
  },
  {
    key: 'newPassword',
    title: 'New Password',
    placeholder: 'Enter your new password',
  },
  {
    key: 'confirmNewPassword',
    title: 'Confirm New Password',
    placeholder: 'Enter your confirm password',
  },
];

export const LOGIN_INPUT_FIELDS = [
  {
    key: 'fullName',
    title: 'Full Name',
    placeholder: 'Input your full name here…',
    inputType: 'default',
  },
  {
    key: 'email',
    title: 'Email Address',
    placeholder: 'yourname@email.com',
    inputType: 'email-address',
  },
  {
    key: 'phoneNumber',
    title: 'Phone Number',
    placeholder: 'Input your phone number here...',
    inputType: 'phone-pad',
  },
  {
    key: 'password',
    title: 'Password',
    placeholder: 'Input password here...',
    inputType: 'visible-password',
  },
];

export const REGISTER_INPUT_FIELDS = [
  {
    key: 'fullName',
    inputTitle: 'Full Name',
    placeholder: 'Input your full name here…',
    inputType: 'default',
  },
  {
    key: 'email',
    inputTitle: 'Email Address',
    placeholder: 'yourname@email.com',
    inputType: 'email-address',
  },
  {
    key: 'phoneNumber',
    inputTitle: 'Phone Number',
    placeholder: 'Input your phone number here...',
    inputType: 'phone-pad',
  },
  {
    key: 'password',
    inputTitle: 'Password',
    placeholder: 'Input password here...',
    inputType: 'visible-password',
  },
];

export const EDIT_PROFILE_INPUT_FIELDS = [
  {
    key: 'fullName',
    title: 'Full Name',
    placeholder: 'Enter your name',
    inputType: 'default',
    editAble: false,
  },
  {
    key: 'email',
    title: 'Email Address',
    placeholder: 'Enter your email',
    inputType: 'email-address',
    editAble: false,
  },
];
