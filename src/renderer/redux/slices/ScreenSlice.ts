import { IScreenState } from "../../api/types/screen";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IScreenState = {
  screen: "CRAYON",
  loadTime: 1000,
};

const screeSlice = createSlice({
  name: "Screen",
  initialState,
  reducers: {
    setScreen: (
      state: IScreenState,
      action: PayloadAction<Partial<IScreenState>>
    ) => {
      state = Object.assign(state, action.payload);
    },
    resetScreen: (state: IScreenState, _action: PayloadAction<null>) => {
      state = Object.assign(state, initialState);
    },
  },
});

export const { setScreen, resetScreen } = screeSlice.actions;
export default screeSlice;

