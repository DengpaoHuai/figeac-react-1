import { createBrowserRouter } from "react-router-dom";
import PlanetsScreen from "../pages/PlanetsScreen";
import CatFactsScreen from "../pages/CatFactsScreen";
import CreateWine from "../pages/CreateWine";

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
    path: "/create-wine",
    element: <CreateWine></CreateWine>,
  },
]);

export default router;
