import { auth, db, provider } from '../firebase';
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import {
  signIn,
  setErrorMessage,
  logOut,
  setAuthTrails,
} from '../../redux/reducers/authReducer';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ITrail } from '../../redux/reducers/trailReducer';
import { toast } from 'react-toastify';

import user from '../../assets/img/user.png';

const handleRegister = (
  email: string,
  password: string,
  username: string,
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (auth.currentUser != null) {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL:
            'https://firebasestorage.googleapis.com/v0/b/m-hiker.appspot.com/o/images%2Fuser.png?alt=media&token=ef042fe4-cc98-49a5-b57c-a17d48c3037b',
        });
      }

      dispatch(
        signIn({
          uid: user.uid,
          username: username,
          email: user.email,
          photoUrl:
            'https://firebasestorage.googleapis.com/v0/b/m-hiker.appspot.com/o/images%2Fuser.png?alt=media&token=ef042fe4-cc98-49a5-b57c-a17d48c3037b',
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
          photoUrl: user.photoURL,
        })
      );

      navigate('/profile');
    })
    .catch((error) => {
      const errorMessage = error.message;

      dispatch(setErrorMessage({ errorMessage: errorMessage }));
    });
};

const handleSignOut = (
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
) => {
  signOut(auth)
    .then(() => {
      dispatch(logOut());
      navigate('/');
    })
    .catch((error) => {
      dispatch(setErrorMessage({ errorMessage: error.message }));
    });
};

const handleGetProfileTrails = (uid: string, dispatch: Dispatch<AnyAction>) => {
  const getProfileTrails = async () => {
    const querySnapshot = await getDocs(collection(db, 'trails'));

    const data: Array<ITrail> = [];

    querySnapshot.forEach((doc: any) => {
      if (doc.data().uid === uid) {
        data.push({
          id: doc.id,
          uid: doc.data().uid,
          username: doc.data().username,
          name: doc.data().name,
          description: doc.data().description,
          images: doc.data().images,
          comments: doc.data().comments,
        });
      }
    });

    dispatch(setAuthTrails(data));
  };

  getProfileTrails();
};

const handleDeleteProfileTrail = (
  id: string,
  uid: string,
  dispatch: Dispatch<AnyAction>
) => {
  const deleteProfileTrail = async () => {
    const ref = doc(db, 'trails', id);

    await deleteDoc(ref);

    handleGetProfileTrails(uid, dispatch);
  };

  deleteProfileTrail();
  toast('Deleted Trail');
};

const handleUpdateProfileImage = (
  photoUrl: string,
  dispatch: Dispatch<AnyAction>
) => {
  updateProfile(auth.currentUser!, {
    photoURL: photoUrl,
  })
    .then(() => {
      dispatch(
        signIn({
          uid: auth.currentUser!.uid,
          username: auth.currentUser!.displayName,
          email: auth.currentUser!.email,
          photoUrl: photoUrl,
        })
      );
    })
    .catch((error) => {});
};

export {
  handleRegister,
  handleLogin,
  handleSignOut,
  handleGetProfileTrails,
  handleDeleteProfileTrail,
  handleUpdateProfileImage,
};
