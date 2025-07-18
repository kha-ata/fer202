import React, { useState } from 'react';
// Thêm Link từ react-router-dom để điều hướng không reload trang
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import NotFoundPage from './components/NotFoundPage';
// Thêm import mới cho component AccountList
import AccountList from './components/AccountList';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Laptop Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {user ? (
                  // Cập nhật các link trong Navbar khi người dùng đã đăng nhập
                  <>
                    {/* <Nav.Link as={Link} to="/laptops">Home</Nav.Link> */}

                    <Nav.Link onClick={handleLogout}>Logout ({user.username})</Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route 
            path="/login" 
            element={user ? <Navigate to="/laptops" /> : <LoginForm setUser={setUser} />} 
          />
          <Route 
            path="/laptops" 
            element={user ? <LaptopList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/laptops/:id" 
            element={user ? <LaptopDetail /> : <Navigate to="/login" />} 
          />
          {/* Thêm Route mới cho AccountList, đây là một protected route */}
          <Route
            path="/accounts"
            element={user ? <AccountList /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/laptops" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
