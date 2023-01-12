import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';

const queryClient = new QueryClient();
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_URI as string,
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
};
