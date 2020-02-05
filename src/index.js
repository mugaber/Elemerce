import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import CartProvider from './providers/cart/CartProvider';

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById('root')
);
