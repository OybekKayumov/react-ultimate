import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


// import './store';
// store.dispatch({ type: 'account/deposit', payload: 250 });
// console.log(': ', store.getState());

// now our application knows about the Redux store
// every single component in the application can now read data from the store and can dispatch actions to it.

// that is very similar to the behavior that we see in the Context API.
// it's basically broadcasting global state into every component that actually wants to read it.