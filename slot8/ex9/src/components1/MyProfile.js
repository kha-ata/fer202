import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function MyProfile() {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-dark">kha</h1>
          <p className="lead" style={{ color: '#555' }}>
            <strong>Giới thiệu:</strong> Tôi là một lập trình viên React với niềm đam mê công nghệ và học hỏi.
          </p>
          <p className="text-muted">
            Xin chào! Mình là một lập trình viên React, yêu thích học hỏi và khám phá những công nghệ mới.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;