import { createContext, useEffect, useState } from "react";
import { Wine } from "../types/wine.type";

type WineContext = {
  wines: Wine[];
  createWine: (wine: Wine) => void;
  loading: boolean;
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
    fetch(
      "https://crudcrud.com/api/7f061ddf3d1548d6aea97b41cd358664/wines"
    ).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setWines(data);
        setLoading(false);
      });
    });
  }, []);

  const createWine = (wine: Wine) => {
    setWines([...wines, wine]);
  };

  return (
    <WineContext.Provider value={{ wines, loading, createWine }}>
      {children}
    </WineContext.Provider>
  );
};

export default WineContextProvider;
