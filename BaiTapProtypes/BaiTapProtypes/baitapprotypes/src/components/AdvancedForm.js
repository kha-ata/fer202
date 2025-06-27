import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AdvancedForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Hàm validate form
  const validate = () => {
    const newErrors = {};
    // validate name
    if (!form.name) {
      newErrors.name = "Tên không được để trống.";
    } else if (form.name.length < 3 || form.name.length > 50) {
      newErrors.name = "Tên phải từ 3-50 ký tự.";
    }
    // validate age
    const ageNum = parseInt(form.age, 10);
    if (!form.age) {
      newErrors.age = "Tuổi không được để trống.";
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = "Tuổi phải là số từ 18 đến 100.";
    }
    // validate email
    if (!form.email) {
      newErrors.email = "Email không được để trống.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    ) {
      newErrors.email = "Email không đúng định dạng.";
    }
    // validate phone
    if (!form.phone) {
      newErrors.phone = "Số điện thoại không được để trống.";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10-15 chữ số.";
    }
    // validate agree
    if (!form.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản.";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  // Hàm xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(form);
      setShowAlert(false);
    }
  };

  return (
    <Container className="my-4">
      <h3>Form Đăng Ký Thông Tin</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group controlId="formName" className="mb-2">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            placeholder="Nhập tên"
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        {/* Age */}
        <Form.Group controlId="formAge" className="mb-2">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
            placeholder="Nhập tuổi"
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="Nhập email"
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        {/* Phone */}
        <Form.Group controlId="formPhone" className="mb-2">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
            placeholder="Nhập số điện thoại"
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        {/* Agree */}
        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            name="agree"
            label="Tôi đồng ý với điều khoản"
            checked={form.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
          {errors.agree && (
            <div style={{ color: "red", fontSize: "0.9em" }}>{errors.agree}</div>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Đăng ký
        </Button>
      </Form>
    </Container>
  );
};

AdvancedForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AdvancedForm;
