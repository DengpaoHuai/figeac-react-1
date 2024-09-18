import { createBrowserRouter, redirect } from "react-router-dom";
import PlanetsScreen from "../pages/PlanetsScreen";
import CatFactsScreen from "../pages/CatFactsScreen";
import CreateWine from "../pages/CreateWine";
import WinesListScreen from "../pages/WinesListScreen";
//import WineLayout from "../layouts/WineLayout";
import WinesListScreenRedux from "../pages/WinesListScreenRedux";
import { getWineById, getWines } from "../services/wines.service";
import { useWineStore } from "../store/useWineStore";
import UpdateWine from "../pages/UpdateWine";
import { queryClient } from "../App";
import { Wine } from "../types/wine.type";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetsScreen></PlanetsScreen>,
  },
  {
    path: "/chats-mignons",
    element: <CatFactsScreen></CatFactsScreen>,
  },
  {
    //element: <WineLayout></WineLayout>,
    children: [
      {
        path: "/create-wine",
        element: <CreateWine></CreateWine>,
      },
      {
        /*  loader: async () => {
          const response = await getWines();
          useWineStore.setState({ wines: response.data });
          return response.data;
        },*/
        path: "/list-wine",
        element: (
          <Suspense fallback={<p>chargement....</p>}>
            <WinesListScreen></WinesListScreen>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/list-wine-redux",
    element: <WinesListScreenRedux></WinesListScreenRedux>,
  },
  {
    loader: async ({ params }) => {
      if (!params.id) return redirect("/list-wine");
      await queryClient.prefetchQuery<Wine>({
        queryKey: ["wine", params.id],
        queryFn: () => getWineById(params.id as string),
      });
      return true;
    },
    path: "/update-wine/:id",
    element: <UpdateWine></UpdateWine>,
  },
]);

export default router;
