"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

function Providers({ children }: any) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
}

export default Providers;
