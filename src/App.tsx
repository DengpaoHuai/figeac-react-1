import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
export const queryClient = new QueryClient({});

const persister = createSyncStoragePersister({
  storage: localStorage,
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <RouterProvider router={router}></RouterProvider>;
    </PersistQueryClientProvider>
  );
}

export default App;
