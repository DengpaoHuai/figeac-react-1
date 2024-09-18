import swapi from "./instances/swapi";

export const getPlanets = async (page = 1) => {
  const response = await swapi.get("/planets?page=" + page);
  return response.data;
};
