import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import axios from 'axios';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLaptopDetail();
  }, [id]);

  const fetchLaptopDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
      setLaptop(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('Laptop not found');
      } else {
        setError('Failed to fetch laptop details');
      }
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  
  if (error) {
    return (
      <Container className="mt-4">
        <NotFoundPage message={error} />
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Button 
        variant="secondary" 
        onClick={() => navigate('/laptops')}
        className="mb-3"
      >
        ← Back to Laptop List
      </Button>

      <Card>
        <Row>
          <Col md={6}>
            <Card.Img 
              src={laptop.image} 
              alt={`${laptop.brand} ${laptop.model}`}
              style={{ height: '200px', objectFit: 'cover' , width: 'auto' }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="h2">{laptop.brand} {laptop.model}</Card.Title>
              <Card.Text>
                <strong>Brand:</strong> {laptop.brand}<br />
                <strong>Model:</strong> {laptop.model}<br />
                <strong>Year:</strong> {laptop.year}<br />
                <strong>Price:</strong> {laptop.price}<br />
                <strong>Description:</strong> High-performance laptop with excellent build quality 
                and advanced features suitable for professional use.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

LaptopDetail.propTypes = {
  id: PropTypes.string
};

export default LaptopDetail;
