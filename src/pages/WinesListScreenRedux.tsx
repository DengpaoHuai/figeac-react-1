/*import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect } from "react";
import { setAllWines } from "../store/asyncThunks/wines.actions";

const WinesListScreenRedux = () => {
  const { wines, loading } = useSelector((state: RootState) => state.wineSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAllWines());
  }, []);

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
              //deleteWine(wine._id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
};

export default WinesListScreenRedux;
*/

export const Demo = () => {
  return <></>;
};

export default Demo;
