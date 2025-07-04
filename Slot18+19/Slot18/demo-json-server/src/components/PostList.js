import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Table, Button, Card, Container, Row, Col, Spinner, Alert, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const PostItem = ({ post, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);
  
  const confirmDelete = () => {
    onDelete(post.id);
    handleCloseConfirm();
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
        <div className="d-flex gap-2">
          <Link to={`/edit/${post.id}`} className="btn btn-warning">Chỉnh sửa</Link>
          <Button variant="danger" onClick={handleShowConfirm}>Xóa</Button>
        </div>
      </Card.Body>

      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa bài viết "{post.title}" không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Hủy
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setError("Không thể tải dữ liệu bài viết. Vui lòng thử lại sau.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      setError("Không thể xóa bài viết. Vui lòng thử lại sau.");
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
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!data || data.length === 0) {
    return (
      <Container>
        <Alert variant="info">Không có bài viết nào!</Alert>
        <Link to="/create" className="btn btn-primary">Tạo bài viết mới</Link>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Danh sách bài viết</h2>
        </Col>
        <Col className="text-end">
          <Link to="/create" className="btn btn-primary">Tạo bài viết mới</Link>
        </Col>
      </Row>
      
      {data.map((post) => (
        <PostItem key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </Container>
  );
};

export default PostList;
