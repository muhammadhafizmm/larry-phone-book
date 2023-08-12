import client from "@/config/apollo-client";
import { AppProvider } from "@/storage";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
}
