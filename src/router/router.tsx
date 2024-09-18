import { createBrowserRouter } from "react-router-dom";
import PlanetsScreen from "../pages/PlanetsScreen";
import CatFactsScreen from "../pages/CatFactsScreen";
import CreateWine from "../pages/CreateWine";
import WinesListScreen from "../pages/WinesListScreen";
//import WineLayout from "../layouts/WineLayout";
import WinesListScreenRedux from "../pages/WinesListScreenRedux";
import { getWines } from "../services/wines.service";
import { useWineStore } from "../store/useWineStore";

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
        element: <WinesListScreen></WinesListScreen>,
      },
    ],
  },
  {
    path: "/list-wine-redux",
    element: <WinesListScreenRedux></WinesListScreenRedux>,
  },
]);

export default router;
