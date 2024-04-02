import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducer from './store/index';
import { AuthProvider, I18nProvider, ThemeProvider } from './components/Providers/Providers';

import App from './components/App';

const initApp = () => {
  const store = configureStore({
    reducer,
  });

  return (
    <I18nProvider>
      <AuthProvider>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </AuthProvider>
    </I18nProvider>
  );
};

export default initApp;
