import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPlanets } from "../services/planets.service";

const PlanetsScreen = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
    staleTime: 5000,
    gcTime: 60000 * 60 * 24,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Failed to fetch data</p>}
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
