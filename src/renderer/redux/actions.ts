import * as screenSlice from "./slices/ScreenSlice";
import * as globalDataSlice from "./slices/GlobalData";
import * as mintingSlice from "./slices/mintingSlice";

export const actions = {
  SET_SCREEN: screenSlice.setScreen,
  RESET_SCREEN: screenSlice.resetScreen,
  SET_GLOBAL_DATA: globalDataSlice.setData,
  RESET_GLOBAL_DATA: globalDataSlice.resetData,
  SET_MINTING_STATE: mintingSlice.setMinting,
  RESET_MINTING_STATE: mintingSlice.resetMinting,
};

export type ActionKeys = keyof typeof actions;
