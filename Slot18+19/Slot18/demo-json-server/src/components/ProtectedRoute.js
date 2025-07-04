import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAuthenticated = currentUser && currentUser.isLoggedIn;

  if (!isAuthenticated) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    return <Navigate to="/" replace />;
  }

  // Nếu đã đăng nhập, hiển thị nội dung của route
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute; 