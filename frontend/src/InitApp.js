import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducer from './store/index';
import { AuthProvider } from './components/Providers/Providers';

import App from './components/App';

const initApp = () => {
  const store = configureStore({
    reducer,
  });

  return (
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

export default initApp;
