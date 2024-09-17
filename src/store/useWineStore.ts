import { create } from "zustand";
import { Wine } from "../types/wine.type";
import { useEffect } from "react";
import { deleteWineById, getWines, postWine } from "../services/wines.service";

type WineStore = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
  setAllWines: (wines: Wine[]) => void;
  addWine: (wine: Wine) => void;
  setLoading: (loading: boolean) => void;
  deleteWine: (id: string) => void;
  setError: (error: string | null) => void;
};

export const useWineStore = create<WineStore>((set) => ({
  wines: [],
  loading: false,
  error: null,
  setAllWines: (wines) => set({ wines }),
  addWine: (wine) => set((state) => ({ wines: [...state.wines, wine] })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  deleteWine: (id) =>
    set((state) => ({ wines: state.wines.filter((wine) => wine._id !== id) })),
}));

const useWine = () => {
  const { setAllWines, setLoading, setError, deleteWine, addWine, ...params } =
    useWineStore((state) => state);

  const createWine = async (wine: Omit<Wine, "_id">) => {
    const newWine = await postWine(wine);
    addWine(newWine.data);
  };

  const deleteWineByIdButWithDifferentName = async (id: string) => {
    await deleteWineById(id);
    deleteWine(id);
  };

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
    createWine,
    deleteWineByIdButWithDifferentName,
  };
};

export default useWine;
