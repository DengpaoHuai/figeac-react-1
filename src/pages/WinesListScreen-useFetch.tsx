import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { Wine } from "../types/wine.type.js";
import { Fragment, useEffect } from "react";

const WinesListScreen = () => {
  const { data, loading, error } = useFetch<Wine[]>(
    "https://crudcrud.com/api/7f061ddf3d1548d6aea97b41cd358664/wines"
  );

  useEffect(() => {
    const scrollEventListener = (e: Event) => {
      console.log(e);
    };
    document.addEventListener("scroll", scrollEventListener);
    return () => {
      console.log("je suis démonté");
      document.removeEventListener("scroll", scrollEventListener);
    };
  }, []);

  return (
    <div
      style={{
        height: "300vh",
      }}
    >
      {error && <p>Erreur: {error}</p>}
      {loading && <p>Chargement...</p>}
      <Link to="/create-wine">Créer un vin</Link>
      {data &&
        data.map((wine) => (
          <Fragment key={wine._id}>
            <h2>{wine.name}</h2>
            <p>{wine.year}</p>
            <p>{wine.degree}</p>
          </Fragment>
        ))}
    </div>
  );
};

export default WinesListScreen;
