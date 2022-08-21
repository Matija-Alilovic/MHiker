import { AnyAction } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { Dispatch } from 'react';
import { setTrails, addTrail } from '../../redux/reducers/trailReducer';

import { db } from '../firebase';

const getTrails = (dispatch: Dispatch<AnyAction>) => {
  const getData = async () => {
    const trailsCollectionRef = collection(db, 'trails');
    const querySnapshot = await getDocs(trailsCollectionRef);

    const data: any = [];

    querySnapshot.forEach((doc: any) => {
      data.push({
        uid: doc.data().uid,
        username: doc.data().username,
        name: doc.data().name,
        description: doc.data().description,
        image: doc.data().image,
      });
    });

    dispatch(setTrails(data));
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

export { getTrails, addTrails };
