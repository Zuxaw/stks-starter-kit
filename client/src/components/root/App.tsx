import {HelmetProvider} from "react-helmet-async";
import {AuthProvider} from "~/components/contexts/UserContext";
import { QueryClient, QueryClientProvider } from 'react-query'
import Main from "~/components/root/Main";

const queryClient = new QueryClient()


export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
};
