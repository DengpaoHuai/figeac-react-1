import { Outlet } from "react-router-dom";
import WineContextProvider from "../contexts/WineContextProvider";

const WineLayout = () => {
  return (
    <div>
      <h1>Wine Layout</h1>
      <WineContextProvider>
        <Outlet></Outlet>
      </WineContextProvider>
    </div>
  );
};

export default WineLayout;
