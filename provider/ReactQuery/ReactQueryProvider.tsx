"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });
  return (
    <QueryClientProvider
      client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;