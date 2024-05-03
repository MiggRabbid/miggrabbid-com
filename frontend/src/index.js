import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import initApp from './InitApp';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await initApp();
  root.render(
    <React.StrictMode>
      {vdom}
    </React.StrictMode>,
  );
};

app();
