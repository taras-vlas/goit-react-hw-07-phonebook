import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
 import { Provider as AlertProvider } from "react-alert";
 import AlertTemplate from "react-alert-template-basic";
import './styles.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>
  , document.getElementById('root')
);
