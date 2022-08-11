import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import authReducer from './reducers/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
