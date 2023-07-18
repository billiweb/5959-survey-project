import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Survey from './pages/Survey';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      <Survey />
    </Provider>
  </QueryClientProvider>
);
