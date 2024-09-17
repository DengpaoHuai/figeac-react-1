import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import WineContextProvider from "./contexts/WineContextProvider";

function App() {
  return (
    <WineContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </WineContextProvider>
  );
}

export default App;
