import { Link } from "react-router-dom";
import useWine from "../store/useWineStore";

const WinesListScreen = () => {
  const { wines, loading, deleteWineByIdButWithDifferentName } = useWine();

  return (
    <>
      {loading && <p>chargement...</p>}
      <Link to="/create-wine">Créer un vin</Link>
      {wines.map((wine) => (
        <div key={wine._id}>
          <h2>{wine.name}</h2>
          <p>{wine.year}</p>
          <p>{wine.degree}</p>
          <button
            onClick={() => {
              deleteWineByIdButWithDifferentName(wine._id);
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
