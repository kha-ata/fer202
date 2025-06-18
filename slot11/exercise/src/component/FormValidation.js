import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const FormValidation = () => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  // Xác thực email
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  }, [email]);

  // Xác thực mật khẩu
  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  // Kiểm tra toàn bộ form
  useEffect(() => {
    if (emailValid && passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailValid, passwordValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form da gui thanh cong!');
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '500px' }}>
      <h3>Dang nhap</h3>
      <Form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhap email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            isInvalid={emailTouched && !emailValid}
          />
          <Form.Control.Feedback type="invalid">
            Email khong hop le.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Mat khau</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhap mat khau"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            isInvalid={passwordTouched && !passwordValid}
          />
          <Form.Control.Feedback type="invalid">
            Mat khau phai co it nhat 8 ky tu.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" disabled={!formValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormValidation;
