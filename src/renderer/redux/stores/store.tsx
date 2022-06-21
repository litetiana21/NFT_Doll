import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import screeSlice from "../slices/ScreenSlice";
import globalDataSlice from "../slices/GlobalData";
import mintingSlice from "../slices/mintingSlice";
const rootReducer = combineReducers({
  Screen: screeSlice.reducer,
  globalData: globalDataSlice.reducer,
  mintingState: mintingSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type AppState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
