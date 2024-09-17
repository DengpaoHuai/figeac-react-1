import { create } from "zustand";
import { Wine } from "../types/wine.type";
import { useEffect } from "react";
import { getWines } from "../services/wines.service";

type WineStore = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
  setAllWines: (wines: Wine[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

export const useWineStore = create<WineStore>((set) => ({
  wines: [],
  loading: false,
  error: null,
  setAllWines: (wines) => set({ wines }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

const useWine = () => {
  const { setAllWines, setLoading, setError, ...params } = useWineStore(
    (state) => state
  );

  useEffect(() => {
    setLoading(true);
    getWines()
      .then(({ data }) => {
        setAllWines(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return {
    ...params,
  };
};

export default useWine;
