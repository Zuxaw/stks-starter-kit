import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "~/components/contexts/UserContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from "~/components/root/Main";

const queryClient = new QueryClient()
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.GRAPHQL_URI as string,
});

export const App = () => {
    return (
      <ApolloProvider client={apolloClient}>
        <HelmetProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <Main />
            </QueryClientProvider>
          </AuthProvider>
        </HelmetProvider>
      </ApolloProvider>
    );
}
