import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPlanets } from "../services/planets.service";
import CustomButton from "../components/ui/CustomButton";

const PlanetsScreen: () => JSX.Element = () => {
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
      {isLoading && <p>Chargement...</p>}
      {error && <p>Failed to fetch data</p>}
      <a yo-est="toto" href="/chats-mignons">
        Chat mignon
      </a>
      <Link to="/chats-mignons">Chat mignon</Link>
      <web-component></web-component>
      {data?.results.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <p>{planet.name}</p>
            <p>Rotation period : {planet.rotation_period}</p>
          </Fragment>
        );
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
