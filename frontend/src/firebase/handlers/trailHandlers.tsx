import { AnyAction } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
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
        image: doc.data().image,
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
  image: string,
  dispatch: Dispatch<AnyAction>
) => {
  const addData = async () => {
    const trailsCollectionRef = collection(db, 'trails');

    await addDoc(trailsCollectionRef, {
      uid,
      username,
      name,
      description,
      image,
    });

    dispatch(
      addTrail({
        uid,
        username,
        name,
        description,
        image,
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
    }
  };

  getData();
};

export { getTrails, addTrails, getTrailById };
