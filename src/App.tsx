import { RouterProvider } from "react-router-dom";
import "./App.css";
import "primereact/resources/themes/fluent-light/theme.css";
import router from "./router/router";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PrimeReactProvider } from "primereact/api";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: localStorage,
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <PrimeReactProvider>
        <RouterProvider router={router}></RouterProvider>;
      </PrimeReactProvider>
    </PersistQueryClientProvider>
  );
}

export default App;
