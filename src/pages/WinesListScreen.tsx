import { useContext } from "react";
import { Link } from "react-router-dom";
import { WineContext } from "../contexts/WineContextProvider";

const WinesListScreen = () => {
  const { wines, loading } = useContext(WineContext);
  return (
    <>
      {loading && <p>chargement...</p>}
      <Link to="/create-wine">Créer un vin</Link>
      {wines.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.year}</p>
          <p>{wine.degree}</p>
        </div>
      ))}
    </>
  );
};

export default WinesListScreen;
