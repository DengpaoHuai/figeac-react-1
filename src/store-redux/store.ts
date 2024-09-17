import { configureStore } from "@reduxjs/toolkit";
import wineSlice from "./slices/wineSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    wineSlice: wineSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
