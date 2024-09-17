import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWines } from "../../services/wines.service";

export const setAllWines = createAsyncThunk("wine/setAllWines", async () => {
  const data = await getWines();
  return data.data;
});
