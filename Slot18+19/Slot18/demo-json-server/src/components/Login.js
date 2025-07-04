import React, { useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Tên đăng nhập không được để trống";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Tên đăng nhập</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          isInvalid={!!errors.username}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.username}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          isInvalid={!!errors.password}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Đăng nhập
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const Login = () => {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // Gọi API để kiểm tra thông tin đăng nhập
      const response = await axios.get('http://localhost:3000/useraccounts');
      const users = response.data;
      
      // Tìm user trong danh sách
      const user = users.find(
        u => u.username === formData.username && u.password === formData.password
      );
      
      if (user) {
        // Đăng nhập thành công
        setStatus({ 
          type: 'success', 
          message: `Đăng nhập thành công với tên đăng nhập: ${formData.username}` 
        });
        
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem('currentUser', JSON.stringify({
          id: user.id,
          username: user.username,
          isLoggedIn: true
        }));
        
        // Chuyển hướng sau 1.5 giây
        setTimeout(() => navigate('/posts'), 1500);
      } else {
        // Đăng nhập thất bại
        setStatus({ 
          type: 'danger', 
          message: 'Tên đăng nhập hoặc mật khẩu không chính xác' 
        });
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setStatus({ 
        type: 'danger', 
        message: 'Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.' 
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="shadow-sm" style={{ width: '400px' }}>
        <Card.Header className="text-center bg-primary text-white">
          <h3>Đăng nhập</h3>
        </Card.Header>
        <Card.Body>
          {status && (
            <Alert variant={status.type} className="mb-4">
              {status.message}
            </Alert>
          )}
          <LoginForm onSubmit={handleLogin} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login; 