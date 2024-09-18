import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPlanets } from "../services/planets.service";

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
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
    staleTime: 5000,
    gcTime: 60000 * 60 * 24,
  });

  return (
    <>
      <a href="/chats-mignons">Chat mignon</a>
      <Link to="/chats-mignons">Chat mignon</Link>
      <button
        onClick={() => {
          navigate("/chats-mignons");
        }}
      >
        vers la page des chats mignons
      </button>
      {data?.results.map((planet) => {
        return <p key={planet.url}>{planet.name}</p>;
      })}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        précédent
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        suivant
      </button>
    </>
  );
};

export default PlanetsScreen;
