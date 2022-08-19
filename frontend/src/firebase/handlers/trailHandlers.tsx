import { AnyAction } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Dispatch } from "react";
import { setTrails } from "../../redux/reducers/trailReducer";

import { db } from "../firebase";

const getTrails = (dispatch: Dispatch<AnyAction>) => {
  const getData = async () => {
    const trailsCollectionRef = collection(db, "trails");
    const querySnapshot = await getDocs(trailsCollectionRef);

    querySnapshot.forEach((doc: any) => {
      console.log(`${doc.data().name}`);
    });
  };

  getData();
};

export { getTrails };
