// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import store đã tạo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Bọc App trong Provider và truyền store vào */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
