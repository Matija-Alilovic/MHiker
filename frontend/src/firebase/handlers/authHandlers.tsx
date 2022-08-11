import { auth, provider } from '../firebase';
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import {
  signIn,
  setErrorMessage,
  logOut,
} from '../../redux/reducers/authReducer';

const handleRegister = (
  email: string,
  password: string,
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      dispatch(
        signIn({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
        })
      );

      navigate('/');
    })
    .catch((error) => {
      const errorMessage = error.message;

      dispatch(setErrorMessage({ errorMessage: errorMessage }));
    });
};

const handleLogin = (
  email: string,
  password: string,
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      dispatch(
        signIn({
          uid: user.uid,
          username: user.displayName,
          email: user.email,
        })
      );

      navigate('/');
    })
    .catch((error) => {
      const errorMessage = error.message;

      dispatch(setErrorMessage({ errorMessage: errorMessage }));
    });
};

const handleSignOut = (dispatch: Dispatch<AnyAction>) => {
  signOut(auth)
    .then(() => {
      dispatch(logOut());
    })
    .catch((error) => {
      dispatch(setErrorMessage({ errorMessage: error.message }));
    });
};

export { handleRegister, handleLogin, handleSignOut };
