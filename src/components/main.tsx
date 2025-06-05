"use client"
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client"; 
import Header from "@/components/layout/header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Main;