import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitSpinnerState {
  active: boolean;
}

const initialState: IInitSpinnerState = {
  active: false,
};

const spinnerSlice = createSlice({
  name: 'spinnerSlice',
  initialState,
  reducers: {
    toggleSpinner(state: IInitSpinnerState) {
      state.active = !state.active;
    },
  },
});

export const { toggleSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
