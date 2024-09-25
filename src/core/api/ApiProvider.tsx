import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useMemo } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import useAuthToken from '../auth/hooks/useAuthToken';

const showDevPanel = import.meta.env.VITE_APP_ENABLE_QUERY_DEV;

function ApiProvider({ children }: PropsWithChildren) {
  const token = useAuthToken();

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          queryFn: async ({ queryKey }): Promise<unknown> => {
            const key = queryKey.join('/');

            const headers = new Headers();
            if (token) {
              headers.append('Authorization', `Bearer ${token.access_token}`);
            }

            const response = await fetch(`${import.meta.env.VITE_APP_API_PATH}${key}`, {
              headers,
            });

            // TODO: add toast ??

            return response.json();
          },
        },
      },
    });
  }, [token]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {showDevPanel === 'true' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default ApiProvider;
