import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { useNavigate } from 'react-router';

export interface ITrail {
  id: string;
  uid: string;
  username: string;
  name: string;
  description: string;
  image: string;
}

export interface IInitStateTrail {
  isLoading: boolean;
  items: ITrail[];
}

const initialState: IInitStateTrail = {
  isLoading: false,
  items: [],
};

const authSlice = createSlice({
  name: 'trailSlice',
  initialState,
  reducers: {
    addTrail(state: IInitStateTrail, action) {
      state.items.push(action.payload);
    },
    setTrails(state: IInitStateTrail, action) {
      state.items = action.payload;
    },
  },
});

export const { addTrail, setTrails } = authSlice.actions;

export default authSlice.reducer;
