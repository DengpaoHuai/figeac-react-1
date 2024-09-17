import { createContext, useEffect, useState } from "react";
import { Wine } from "../types/wine.type";
import { deleteWineById, getWines, postWine } from "../services/wines.service";

type WineContext = {
  wines: Wine[];
  createWine: (wine: Omit<Wine, "_id">) => void;
  loading: boolean;
  deleteWine: (id: string) => void;
};

export const WineContext = createContext<WineContext>({} as WineContext);

type WineContextProviderProps = { children: React.ReactNode };

const WineContextProvider: React.FC<WineContextProviderProps> = ({
  children,
}) => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWines().then(({ data }) => {
      setWines(data);
      setLoading(false);
    });
  }, []);

  const createWine = async (wine: Omit<Wine, "_id">) => {
    await postWine(wine).then(({ data }) => {
      setWines([...wines, data]);
    });
  };

  const deleteWine = (id: string) => {
    deleteWineById(id).then((id) => {
      setWines(wines.filter((item) => item._id !== id));
    });
  };

  return (
    <WineContext.Provider value={{ wines, loading, createWine, deleteWine }}>
      {children}
    </WineContext.Provider>
  );
};

export default WineContextProvider;
