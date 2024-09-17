import { createSlice } from "@reduxjs/toolkit";
import { Wine } from "../../types/wine.type";
import { setAllWines } from "../asyncThunks/wines.actions";

type WineSlice = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
};

const initialState: WineSlice = {
  wines: [],
  loading: false,
  error: null,
};

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAllWines.fulfilled, (state, action) => {
      state.wines = action.payload;
      state.loading = false;
    });
    builder.addCase(setAllWines.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setAllWines.rejected, (state, action) => {
      state.error = action.error.message ?? null;
      state.loading = false;
    });
  },
});

export default wineSlice.reducer;
