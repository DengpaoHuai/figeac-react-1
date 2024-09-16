import "./App.css";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <AppLayout title="Mon titre">
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </AppLayout>
  );
}

export default App;
