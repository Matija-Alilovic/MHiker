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
}

const initialState: IInitStateUser = {
  uid: '',
  username: '',
  email: '',
  photoUrl: '',
  loggedIn: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    signIn(state: IInitStateUser, action: PayloadAction<any>) {
      state.uid = action.payload.uid;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.photoUrl =
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
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
  },
});

export const { signIn, logOut, setErrorMessage } = authSlice.actions;

export default authSlice.reducer;
