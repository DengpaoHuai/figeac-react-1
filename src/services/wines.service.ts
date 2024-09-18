import { Wine } from "../types/wine.type";
import crucrud from "./instances/crudcrud";

const addDelay = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getWines = async () => {
  await addDelay(2000);
  const response = await crucrud.get("/wines");
  return {
    ...response.data,
    page : 1
  }
};

export const postWine = async (wine: Omit<Wine, "_id">) => {
  const response = await crucrud.post("/wines", wine);
  return response.data;
};

export const deleteWineById = async (id: string) => {
  await addDelay(2000);
  await crucrud.delete("/wines/" + id);
  return id;
};

export const getWineById = async (id: string) => {
  const response = await crucrud.get("/wines/" + id);
  return response.data;
};

export const updateWine = async (id: string, wine: Omit<Wine, "_id">) => {
  const response = await crucrud.put("/wines/" + id, wine);
  return {
    ...wine,
    _id: id,
  };
};
