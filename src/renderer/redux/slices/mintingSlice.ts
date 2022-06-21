import { IMintingState } from "../../api/types/minting";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IMintingState = {
  mintingState: "NONE",
};

const mintingSlice = createSlice({
  name: "mintingSlice",
  initialState,
  reducers: {
    setMinting: (
      state: IMintingState,
      action: PayloadAction<Partial<IMintingState>>
    ) => {
      state = Object.assign(state, action.payload);
    },
    resetMinting: (state: IMintingState, _action: PayloadAction<null>) => {
      state = Object.assign(state, initialState);
    },
  },
});

export const { setMinting, resetMinting } = mintingSlice.actions;
export default mintingSlice;
