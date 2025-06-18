import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const FormExercise6 = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    gender: false,
    country: false,
    agree: false
  });

  useEffect(() => {
    const isNameValid = name.trim().length >= 2;
    const isGenderValid = gender !== '';
    const isCountryValid = country !== '';
    const isAgreeValid = agree;

    setFormValid(isNameValid && isGenderValid && isCountryValid && isAgreeValid);
  }, [name, gender, country, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form da gui thanh cong!');
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '500px' }}>
      <h4>Bai 6 - Xac thuc Form</h4>
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Ho ten</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhap ten"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            isInvalid={touched.name && name.trim().length < 2}
          />
          <Form.Control.Feedback type="invalid">
            Ten phai co it nhat 2 ky tu.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Gender */}
        <Form.Group className="mb-3">
          <Form.Label>Gioi tinh</Form.Label>
          <div>
            <Form.Check
              inline
              label="Nam"
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, gender: true }))}
              isInvalid={touched.gender && gender === ''}
            />
            <Form.Check
              inline
              label="Nu"
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, gender: true }))}
              isInvalid={touched.gender && gender === ''}
            />
            {touched.gender && gender === '' && (
              <div className="text-danger mt-1">Vui long chon gioi tinh</div>
            )}
          </div>
        </Form.Group>

        {/* Country */}
        <Form.Group className="mb-3">
          <Form.Label>Quoc gia</Form.Label>
          <Form.Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
            isInvalid={touched.country && country === ''}
          >
            <option value="">-- Chon quoc gia --</option>
            <option value="vn">Viet Nam</option>
            <option value="us">My</option>
            <option value="jp">Nhat Ban</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Vui long chon quoc gia.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Toi dong y voi dieu khoan"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            onBlur={() => setTouched((prev) => ({ ...prev, agree: true }))}
            isInvalid={touched.agree && !agree}
          />
          {touched.agree && !agree && (
            <div className="text-danger mt-1">Ban phai dong y voi dieu khoan</div>
          )}
        </Form.Group>

        <Button type="submit" variant="primary" disabled={!formValid}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormExercise6;
