import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cấu hình cho lazy loading
// Tăng timeout cho Suspense để tránh hiển thị fallback quá nhanh với các kết nối mạng tốt
// Điều này giúp tránh hiện tượng nhấp nháy khi chuyển trang
const timeoutMs = 2000;

// Tùy chỉnh cách React xử lý lazy loading
const originalLazy = React.lazy;
React.lazy = (importFn) => {
  return originalLazy(() => {
    return Promise.all([
      importFn(),
      new Promise(resolve => setTimeout(resolve, 300)) // Thêm độ trễ nhỏ để tránh nhấp nháy
    ]).then(([moduleExports]) => moduleExports);
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
