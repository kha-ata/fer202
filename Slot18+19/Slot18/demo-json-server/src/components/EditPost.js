import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Alert, Button, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import { PostForm } from "./CreatePost"; // Import PostForm từ CreatePost

const EditPost = () => {
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.data) {
          setPost(response.data);
        } else {
          setStatus({ type: "danger", message: `Không tìm thấy bài viết với id ${id}` });
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setStatus({ type: "danger", message: "Không thể tải bài viết. Vui lòng thử lại sau." });
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.put(`http://localhost:3000/posts/${id}`, formData);
      if (response.status === 200) {
        setStatus({ type: "success", message: "Bài viết đã được cập nhật thành công!" });
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật bài viết:", error);
      setStatus({ type: "danger", message: "Có lỗi xảy ra khi cập nhật bài viết." });
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </Spinner>
      </div>
    );
  }

  if (!post && !loading) {
    return (
      <Container>
        <Alert variant="danger">
          Không tìm thấy bài viết với ID: {id}
        </Alert>
        <Button variant="primary" onClick={() => navigate("/")}>
          Quay lại danh sách
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Card className="mb-4">
        <Card.Header as="h2">Chỉnh sửa bài viết</Card.Header>
        <Card.Body>
          {status && (
            <Alert variant={status.type} className="mb-4">
              {status.message}
            </Alert>
          )}
          <PostForm onSubmit={handleSubmit} initialValues={post} />
        </Card.Body>
      </Card>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Quay lại danh sách
      </Button>
    </Container>
  );
};

export default EditPost;
