import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  User,
  CreateUserResponseData,
  UserDataState,
  Update,
} from '../../types/types';

const initialState: UserDataState = {
  uid: '',
  fullName: '',
  email: '',
  phone: null,
  password: null,
  user: null,
};

export const signUpUser = createAsyncThunk<
  CreateUserResponseData,
  User,
  {rejectValue: string}
>('auth/signUpUser', async (user, {rejectWithValue}: any) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    Alert.alert('Account is Created');
    const fullUserData = userCredential.user;
    await firestore().collection('users').doc(fullUserData.uid).set({
      fullName: user.fullName,
      email: fullUserData.email,
      phone: user.phone,
      password: user.password,
    });
    return {
      id: fullUserData.uid,
      fullName: user.fullName,
      email: fullUserData.email,
      phone: user.phone,
    };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Please try with diferent email, this email already exsits ');
    }
    if (error.code === 'auth/invalid-password') {
      Alert.alert('Password should be at least 8 characters');
    }
    if (error.code === 'auth/invalid-email') {
      Alert.alert('This email is invalid email');
    }
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue(error);
    }
  }
});

export const logInUser = createAsyncThunk('auth/logInUser', async () => {
  try {
    const user = auth().currentUser;

    if (user) {
      const docData = firestore().collection('users').doc(user.uid);
      const doc = await docData.get();
      if (doc.exists) {
        return {
          uid: user.uid,
          id: doc.id,
          fullName: doc.data()?.fullName || 'No Name',
          email: doc.data()?.email || 'No Email',
          phone: doc.data()?.phone || 'No Phone',
        };
      } else {
        Alert.alert('this user is not found');
        throw new Error('User is not found');
      }
    } else {
      console.error('No user logged in');
      throw new Error('User not logged in');
    }
  } catch (error: any) {
    console.error('Error in getUser thunk:', error.message);
    throw error;
  }
});

export const getUser = createAsyncThunk('getUser', async () => {
  try {
    const user = auth().currentUser;
    if (user) {
      const docRef = firestore().collection('users').doc(user.uid) || null;
      const doc = (await docRef.get()) || null;
      if (doc.exists) {
        return {
          uid: user.uid,
          id: doc.id,
          fullName: doc.data()?.fullName || '',
          email: doc.data()?.email || '',
          phone: doc.data()?.phone || '',
        };
      } else {
        throw new Error('user is not found');
      }
    } else {
      await auth().signOut();
      Alert.alert('Session Expired', 'Please log in again.');
      throw new Error('User not logged in');
    }
  } catch (e) {
    throw e;
  }
});

export const updateUser = createAsyncThunk(
  'updateUser',
  async (user: Update) => {
    try {
      if (!user.uid || !user.fullName || !user.email) {
        throw new Error('Invalid user data: all fields are required.');
      }
      const userRef = firestore().collection('users').doc(user?.uid);

      const doc = await userRef.get();
      if (!doc.exists) {
        throw new Error('User document does not exist.');
      }

      await userRef.update({
        fullname: user?.fullName,
        email: user?.email,
      });
      return user;
    } catch (e: any) {
      console.error('Error updating Firestore document:', e.message);
      throw e;
    }
  },
);

export const signInWithGoogle = createAsyncThunk('withGoogle', async () => {
  try {
    const google = await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.data?.idToken as string,
    );
    const userCredential = await auth().signInWithCredential(googleCredential);
    const fullUser = userCredential.user;

    await firestore().collection('users').doc(fullUser.uid).set({
      fullName: fullUser.displayName,
      email: fullUser.email,
      phone: fullUser.phoneNumber,
    });
    Alert.alert('Google Sign-In successful!');
    return userCredential || null;
  } catch (error) {
    const errorMessage: any =
      error instanceof Error ? error.message : 'Unknown error occurred';
    Alert.alert('Google Sign-In Error', errorMessage);
  }
});

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.fullName = action.payload.fullName || '';
      state.email = action.payload.email || '';
      state.phone = action.payload.phone || null;
      state.user = action.payload || null;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.user = action.payload;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.fullName = action.payload.fullName || '';
      state.email = action.payload.email || '';
    });
  },
});

export default authSlice.reducer;
