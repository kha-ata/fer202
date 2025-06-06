import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Title Component
const Title = ({ text }) => (
  <Card.Title className="text-center mb-0">{text}</Card.Title>
);

// Description Component
const Description = ({ text }) => (
  <Card.Text className="text-center text-muted mb-0">{text}</Card.Text>
);

// Card Image Component
const CardImage = ({ url, alt = "Card image" }) => (
  <Image
    src="https://cdn.haitrieu.com/wp-content/uploads/2023/05/Logo-Truong-Cao-dang-FPT-Polytechnic.png"
    alt={alt}
    fluid
    className="h-50"
    style={{ objectFit: 'cover', height: '150px', marginTop: '25px' }}
  />
);

const SimpleCard = () => {
  const cardData = {
    title: "Hoai Nguyen - FPT DaNang",
    description: "Mobile: 0982827763",
    imageUrl: ""
  };

  return (
    <div className="p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Card className="mb-3" border="primary">
        <Row className="g-0">
          <Col md={3}>
            <CardImage url={cardData.imageUrl} alt={cardData.title} />
          </Col>
          <Col md={9}>
            <Card.Body className="p-3">
              <Title text={cardData.title} />
              <hr className="my-3 border-dark" />
              <Description text={cardData.description} />
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SimpleCard;