import IndexContexProvider from "@/contexts/IndexContex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexContexProvider>
        <Component {...pageProps} />
      </IndexContexProvider>
    </QueryClientProvider>
  );
}
