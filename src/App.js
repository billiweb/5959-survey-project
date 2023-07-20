import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import React from 'react';
// import Header from './redux/components/Header';
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
        {/* <Header /> */}
      </QueryClientProvider>
    </>
  );
};

export default App;
