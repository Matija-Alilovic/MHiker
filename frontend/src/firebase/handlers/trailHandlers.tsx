import { AnyAction } from '@reduxjs/toolkit';
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { Dispatch } from 'react';
import {
  setSpinnerActive,
  setSpinnerDisable,
  toggleSpinner,
} from '../../redux/reducers/spinnerReducer';
import {
  setTrails,
  addTrail,
  ITrail,
  setCurrentTrail,
  IComment,
} from '../../redux/reducers/trailReducer';

import { db } from '../firebase';

const getTrails = (dispatch: Dispatch<AnyAction>) => {
  const getData = async () => {
    dispatch(setSpinnerActive());

    const trailsCollectionRef = collection(db, 'trails');
    const querySnapshot = await getDocs(trailsCollectionRef);

    const data: Array<ITrail> = [];

    querySnapshot.forEach((doc: any) => {
      data.push({
        id: doc.id,
        uid: doc.data().uid,
        username: doc.data().username,
        name: doc.data().name,
        description: doc.data().description,
        images: doc.data().images,
        comments: doc.data().comments,
      });
    });

    dispatch(setTrails(data));
    dispatch(setSpinnerDisable());
  };

  getData();
};

const addTrails = (
  uid: string,
  username: string,
  name: string,
  description: string,
  images: Array<string>,
  comments: Array<any>,
  dispatch: Dispatch<AnyAction>
) => {
  const addData = async () => {
    const trailsCollectionRef = collection(db, 'trails');

    await addDoc(trailsCollectionRef, {
      uid,
      username,
      name,
      description,
      images,
      comments,
    });

    dispatch(
      addTrail({
        uid,
        username,
        name,
        description,
        images,
        comments,
      })
    );
  };

  addData();
  getTrails(dispatch);
};

const getTrailById = (id: string, dispatch: Dispatch<AnyAction>) => {
  const getData = async () => {
    dispatch(setSpinnerActive());

    const trailsCollectionRef = doc(db, 'trails', id);

    const singleDocument = await getDoc(trailsCollectionRef);

    if (singleDocument.exists()) {
      const data = singleDocument.data();

      dispatch(setCurrentTrail(data));
      dispatch(setSpinnerDisable());
    } else {
      //no such page
      console.log('No such page');
    }
  };

  getData();
};

const updateTrailById = (
  id: string,
  data: any,
  dispatch: Dispatch<AnyAction>
) => {
  const updateData = async () => {
    dispatch(setSpinnerActive());
    console.log('ID:', id);
    const trailsCollectionRef = doc(db, 'trails', id);

    await setDoc(trailsCollectionRef, data);

    dispatch(setSpinnerDisable());
  };

  updateData();
};

export { getTrails, addTrails, getTrailById, updateTrailById };
