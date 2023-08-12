import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ENV } from "./env";

const client = new ApolloClient({
    uri: ENV.GraphQLUrl,
    cache: new InMemoryCache(),
});

export default client;