import { createContext, useEffect, useState } from "react";
import { Wine } from "../types/wine.type";

type WineContext = {
  wines: Wine[];
  createWine: (wine: Wine) => void;
};

export const WineContext = createContext<WineContext>({} as WineContext);

type WineContextProviderProps = { children: React.ReactNode };

const WineContextProvider: React.FC<WineContextProviderProps> = ({
  children,
}) => {
  const [wines, setWines] = useState<Wine[]>([]);

  useEffect(() => {
    fetch(
      "https://crudcrud.com/api/7f061ddf3d1548d6aea97b41cd358664/wines"
    ).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setWines(data);
      });
    });
  }, []);

  const createWine = (wine: Wine) => {
    setWines([...wines, wine]);
  };

  return (
    <WineContext.Provider value={{ wines, createWine }}>
      {children}
    </WineContext.Provider>
  );
};

export default WineContextProvider;
