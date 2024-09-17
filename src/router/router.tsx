import { createBrowserRouter } from "react-router-dom";
import PlanetsScreen from "../pages/PlanetsScreen";
import CatFactsScreen from "../pages/CatFactsScreen";
import CreateWine from "../pages/CreateWine";
import WinesListScreen from "../pages/WinesListScreen";
import WineLayout from "../layouts/WineLayout";
import WinesListScreenRedux from "../pages/WinesListScreenRedux";

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
    element: <WineLayout></WineLayout>,
    children: [
      {
        path: "/create-wine",
        element: <CreateWine></CreateWine>,
      },
      {
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
