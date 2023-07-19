import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import React from 'react';
import Survey from './pages/Survey';
import Header from './redux/components/Header';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
