import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { UserProfileHandler } from "~/components";
import AppRoutes from "~/routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfileHandler>
        <AppRoutes />
      </UserProfileHandler>
    </QueryClientProvider>
  );
}

export default App;
