import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/AuthSlice';
import todoSlice from './slices/TodoSlice';

const store = configureStore({
  reducer: {
    authReducer: authSlice,
    todoReducer: todoSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
