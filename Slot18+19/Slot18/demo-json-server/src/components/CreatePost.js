import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export const PostForm = ({ onSubmit, initialValues = { title: "", content: "" } }) => {
  const [formData, setFormData] = useState(initialValues);
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
    if (!formData.title.trim()) {
      newErrors.title = "Tiêu đề không được để trống";
    }
    if (!formData.content.trim()) {
      newErrors.content = "Nội dung không được để trống";
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
        <Form.Label>Tiêu đề</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          isInvalid={!!errors.title}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.title}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nội dung</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={formData.content}
          onChange={handleChange}
          isInvalid={!!errors.content}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.content}
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Lưu bài viết
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  })
};

const CreatePost = () => {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await axios.post("http://localhost:3000/posts", formData);
      setStatus({ type: "success", message: "Bài viết đã được tạo thành công!" });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus({ type: "danger", message: "Có lỗi xảy ra khi tạo bài viết." });
    }
  };

  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h2">Thêm bài viết mới</Card.Header>
        <Card.Body>
          {status && (
            <Alert variant={status.type} className="mb-4">
              {status.message}
            </Alert>
          )}
          <PostForm onSubmit={handleSubmit} />
        </Card.Body>
      </Card>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Quay lại danh sách
      </Button>
    </Container>
  );
};

export default CreatePost;
