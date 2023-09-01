import React from 'react';
import ReactDOM from 'react-dom/client';
// import './AppJS/globalState_w_Context_useReducer/store/App.css';
import App from './AppJS/globalState_w_Context_useReducer/App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './AppJS/globalState_w_Context_useReducer/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();