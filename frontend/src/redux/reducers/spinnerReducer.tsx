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
    setSpinnerActive(state: IInitSpinnerState) {
      state.active = true;
    },
    setSpinnerDisable(state: IInitSpinnerState) {
      state.active = false;
    },
  },
});

export const { toggleSpinner, setSpinnerActive, setSpinnerDisable } =
  spinnerSlice.actions;

export default spinnerSlice.reducer;
