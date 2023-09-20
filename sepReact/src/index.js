import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
const store=createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>  <React.StrictMode>
    <GoogleOAuthProvider clientId='775405737077-58i2affkch68c6ho9q8np94o1hmkmlt6.apps.googleusercontent.com' >
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
