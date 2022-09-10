import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useNavigate } from 'react-router';

export interface IComment {
  id: string;
  text: string;
  username: string;
  userImage: string;
}

export interface ITrail {
  id: string;
  uid: string;
  username: string;
  name: string;
  description: string;
  images: Array<string>;
  comments: Array<IComment>;
}

export interface IInitStateTrail {
  isLoading: boolean;
  items: ITrail[];
  currentTrail: ITrail;
}

const initialState: IInitStateTrail = {
  isLoading: false,
  items: [],
  currentTrail: {} as ITrail,
};

const trailSlice = createSlice({
  name: 'trailSlice',
  initialState,
  reducers: {
    addTrail(state: IInitStateTrail, action) {
      state.items.push(action.payload);
    },
    setTrails(state: IInitStateTrail, action) {
      state.items = action.payload;
    },
    setCurrentTrail(state: IInitStateTrail, action) {
      state.currentTrail = action.payload;
    },
  },
});

export const { addTrail, setTrails, setCurrentTrail } = trailSlice.actions;

export default trailSlice.reducer;
