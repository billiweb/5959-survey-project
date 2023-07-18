import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import React from 'react';
import Survey from './pages/Survey';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
