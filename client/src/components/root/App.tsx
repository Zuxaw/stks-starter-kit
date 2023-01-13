import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '~/components/contexts/UserContext';
import Main from '~/components/root/Main';

const queryClient = new QueryClient();
const cache = new InMemoryCache();
console.log('env:' + process.env.GRAPHQL_URI);
const apolloClient = new ApolloClient({
  cache,
  // uri:( process.env.GRAPHQL_URI|| 'http://localhost:4000/graphql') as string,
  uri: 'https://staging.zuxaw.fr/graphql' as string,
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
