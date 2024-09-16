import { useEffect, useState } from "react";

type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

const PlanetsScreen = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlanets(data.results);
      });
  }, []);

  return (
    <>
      {planets.map((planet, index) => {
        return <p key={index}>{planet.name}</p>;
      })}
    </>
  );
};

export default PlanetsScreen;
