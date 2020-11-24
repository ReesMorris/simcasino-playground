import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';

const initialState: any = {};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(initialState)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
