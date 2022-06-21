import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Connection } from "@solana/web3.js";
import { IGlobalData } from "../../api/types/globalData";

const initialState: IGlobalData = {
  connected: false,
  wallet: null,
  screenLoading: true,
  connection: new Connection("https://api.metaplex.solana.com/"),
  apesRemaining: 20000,
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<Partial<IGlobalData>>
    ) => {
      state = Object.assign(state, action.payload);
    },
    resetData: (state, action: PayloadAction<null>) => {
      state = Object.assign(state, initialState);
    },
  },
});

export const { setData, resetData } = globalDataSlice.actions;
export default globalDataSlice;
