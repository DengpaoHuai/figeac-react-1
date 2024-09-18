import { Link } from "react-router-dom";
import { getWines } from "../services/wines.service";
import { useQuery } from "@tanstack/react-query";
import { Wine } from "../types/wine.type";

const WinesListScreen = () => {
  const {
    data: wines,
    isLoading,
    error,
    refetch,
  } = useQuery<Wine[]>({
    queryKey: ["wines"],
    queryFn: getWines,
  });
  return (
    <>
      <button
        onClick={() => {
          refetch();
        }}
      >
        refresh
      </button>
      {isLoading && <p>chargement...</p>}
      {error && <p>Erreur lors du chargement des données</p>}
      <Link to="/create-wine">Créer un vin</Link>
      {wines?.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.year}</p>
          <p>{wine.degree}</p>
          <button
            onClick={() => {
              //deleteWineByIdButWithDifferentName(wine._id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};

export default WinesListScreen;
