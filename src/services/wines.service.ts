import { Wine } from "../types/wine.type";
import crucrud from "./instances/crudcrud";

export const getWines = async () => {
  const response = await crucrud.get("/wines");
  return response;
};

export const postWine = async (wine: Omit<Wine, "_id">) => {
  const response = await crucrud.post("/wines", wine);
  return response;
};

export const deleteWineById = async (id: string) => {
  await crucrud.delete("/wines/" + id);
  return id;
};
