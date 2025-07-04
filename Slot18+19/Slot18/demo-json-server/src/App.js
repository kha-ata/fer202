import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container, Navbar, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from "./components/ProtectedRoute";

// Sử dụng React.lazy để tải các component khi cần
const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

// Component loading để hiển thị khi đang tải các component
const LoadingComponent = () => (
  <div className="text-center my-5">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Đang tải...</span>
    </Spinner>
  </div>
);

const App = () => {
  // Lấy thông tin người dùng đã đăng nhập (nếu có)
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const isAuthenticated = currentUser && currentUser.isLoggedIn;

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href={isAuthenticated ? "/posts" : "/"}>Quản Lý Bài Viết</Navbar.Brand>
          {isAuthenticated && (
            <Navbar.Text className="ms-auto text-light">
              Xin chào, {currentUser.username}
              <button 
                className="btn btn-sm btn-outline-light ms-3"
                onClick={() => {
                  localStorage.removeItem('currentUser');
                  window.location.href = '/';
                }}
              >
                Đăng xuất
              </button>
            </Navbar.Text>
          )}
        </Container>
      </Navbar>
      <Container>
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            {/* Trang chủ là trang đăng nhập */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/posts" /> : <Login />} />
            
            {/* Các route được bảo vệ, yêu cầu đăng nhập */}
            <Route path="/posts" element={
              <ProtectedRoute>
                <PostList />
              </ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            } />
            <Route path="/delete/:id" element={
              <ProtectedRoute>
                <DeletePost />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
};

export default App;
