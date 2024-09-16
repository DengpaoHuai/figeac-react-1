import { useState } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import CatFactsScreen from "./pages/CatFactsScreen";

let counter = 0;

function App() {
  const [counter1, setCounter1] = useState(50);

  console.log("render");

  const increment = () => {
    counter++;
    console.log(counter);
  };

  return (
    <AppLayout title="Mon titre">
      <p>counter : {counter}</p>
      <button onClick={increment}>increment</button>
      <p>counter : {counter1}</p>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
        }}
      >
        increment
      </button>
      <CatFactsScreen />
    </AppLayout>
  );
}

export default App;
