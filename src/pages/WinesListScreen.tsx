import { Link } from "react-router-dom";
import {
  deleteWineById,
  getWineById,
  getWines,
} from "../services/wines.service";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Wine } from "../types/wine.type";

const WinesListScreen = () => {
  const {
    data: wines,
    isLoading,
    error,
    refetch,
  } = useSuspenseQuery<Wine[]>({
    queryKey: ["wines"],
    queryFn: getWines,
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => deleteWineById(id),
    onMutate: (id: string) => {
      const previousWines = queryClient.getQueryData(["wines"]) as Wine[];
      queryClient.setQueryData(["wines"], () => {
        return previousWines.filter((wine: Wine) => wine._id !== id);
      });
      return {
        previousWines,
      };
    },
    onError: (error, variables, context) => {
      if (context) queryClient.setQueryData(["wines"], context.previousWines);
    },
  });

  const preloadData = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ["wine", id],
      queryFn: () => getWineById(id),
    });
  };

  return (
    <>
      <button
        onClick={() => {
          refetch();
        }}
      >
        refresh
      </button>
      {isLoading ? (
        <p>chargement...</p>
      ) : (
        <>
          {wines?.map((wine) => (
            <div key={wine._id}>
              <h2>{wine.name}</h2>
              <p>{wine.year}</p>
              <p>{wine.degree}</p>
              <button
                onClick={() => {
                  mutation.mutate(wine._id);
                }}
              >
                delete
              </button>
              <Link
                onMouseEnter={() => {
                  preloadData(wine._id);
                }}
                to={`/update-wine/${wine._id}`}
              >
                update
              </Link>
            </div>
          ))}
        </>
      )}
      {error && <p>Erreur lors du chargement des données</p>}
      <Link to="/create-wine">Créer un vin</Link>
    </>
  );
};

export default WinesListScreen;
