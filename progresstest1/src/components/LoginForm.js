import React, { useState } from 'react';
import { Container, Form, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Kiểm tra nếu username hoặc password trống
    if (!username || !password) {
      setError('Username and password are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const user = response.data.find(u => 
        u.username === username && 
        u.password === password && 
        u.status === 'active'
      );
      
      if (user) {
        setUser(user);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/laptops');
        }, 2000);
      } else {
        setError('Invalid username or password!');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </Form.Group>
            
            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Form>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <h4>Welcome, {username} login Successful!</h4>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

// PropTypes validation
LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginForm;
