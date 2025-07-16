import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import NotFoundPage from './components/NotFoundPage';

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
            <Navbar.Brand href="/">Laptop Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {user ? (
                  <>
                    <Nav.Link href="/laptops">Laptops</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout ({user.username})</Nav.Link>
                  </>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route 
            path="/login" 
            element={
              user ? <Navigate to="/laptops" /> : <LoginForm setUser={setUser} />
            } 
          />
          <Route 
            path="/laptops" 
            element={
              user ? <LaptopList /> : <Navigate to="/login" />
            } 
          />
          <Route 
            path="/laptops/:id" 
            element={
              user ? <LaptopDetail /> : <Navigate to="/login" />
            } 
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
