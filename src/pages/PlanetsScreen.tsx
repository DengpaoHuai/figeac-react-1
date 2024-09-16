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

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

const PlanetsScreen = () => {
  const [planets, setPlanets] = useState<PlanetResponse>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data: PlanetResponse = await response.json();
    setPlanets(data);
  };

  useEffect(() => {
    getData("https://swapi.dev/api/planets/");
  }, []);

  return (
    <>
      {planets.results.map((planet, index) => {
        return <p key={index}>{planet.name}</p>;
      })}
      <button
        disabled={!planets.previous}
        onClick={() => {
          if (planets.previous) getData(planets.previous);
        }}
      >
        précédent
      </button>
      <button
        disabled={!planets.next}
        onClick={() => {
          if (planets.next) getData(planets.next);
        }}
      >
        suivant
      </button>
    </>
  );
};

export default PlanetsScreen;
