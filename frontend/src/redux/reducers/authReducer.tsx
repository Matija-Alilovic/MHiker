import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase';

export interface IInitStateUser {
  uid: string;
  username: string;
  email: string;
  photoUrl: string;
  loggedIn: boolean;
  errorMessage: string;
  trails: Array<any>;
}

const initialState: IInitStateUser = {
  uid: '',
  username: '',
  email: '',
  photoUrl: '',
  loggedIn: false,
  errorMessage: '',
  trails: [],
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    signIn(state: IInitStateUser, action: PayloadAction<any>) {
      state.uid = action.payload.uid;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
      state.loggedIn = true;
      state.errorMessage = '';
    },
    logOut(state: IInitStateUser) {
      state.uid = '';
      state.username = '';
      state.email = '';
      state.photoUrl = '';
      state.loggedIn = false;
      state.errorMessage = '';
    },
    setErrorMessage(state: IInitStateUser, action: PayloadAction<any>) {
      state.errorMessage = action.payload.errorMessage;
    },
    setAuthTrails(state: IInitStateUser, action: PayloadAction<any>) {
      state.trails = action.payload;
    },
  },
});

export const { signIn, logOut, setErrorMessage, setAuthTrails } =
  authSlice.actions;

export default authSlice.reducer;
