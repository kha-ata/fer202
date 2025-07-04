import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Button, Alert, Modal, Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

const DeleteConfirmation = ({ postTitle, onConfirm, onCancel }) => {
  return (
    <Card className="mb-4">
      <Card.Header as="h2" className="bg-danger text-white">Xác nhận xóa</Card.Header>
      <Card.Body>
        <Card.Text className="mb-4">
          Bạn có chắc chắn muốn xóa bài viết "{postTitle}" không?
          <br />
          Hành động này không thể hoàn tác.
        </Card.Text>
        <div className="d-flex gap-2">
          <Button variant="danger" onClick={onConfirm}>
            Xác nhận xóa
          </Button>
          <Button variant="secondary" onClick={onCancel}>
            Hủy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

DeleteConfirmation.propTypes = {
  postTitle: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.data) {
          setPost(response.data);
        } else {
          setError("Không tìm thấy bài viết");
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin bài viết:", error);
        setError("Không thể tải thông tin bài viết");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setStatus({ type: "success", message: "Bài viết đã được xóa thành công!" });
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      setStatus({ type: "danger", message: "Có lỗi xảy ra khi xóa bài viết." });
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

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
        <Button variant="primary" onClick={() => navigate("/")}>
          Quay lại danh sách
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      {status ? (
        <Alert variant={status.type}>{status.message}</Alert>
      ) : (
        <DeleteConfirmation
          postTitle={post.title}
          onConfirm={handleDelete}
          onCancel={() => navigate("/")}
        />
      )}
    </Container>
  );
};

export default DeletePost;
