import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLaptops();
  }, []);

  const fetchLaptops = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Laptops');
      setLaptops(response.data);
      setFilteredLaptops(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch laptops');
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Laptop Management</h2>
      
      {/* Search Section */}
      <Row className="mb-4">
        <Col md={8}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by brand or model..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button variant="primary" onClick={handleSearch} className="w-100">
            Search
          </Button>
        </Col>
      </Row>

      {/* Laptop List */}
      <Row>
        {filteredLaptops.map(laptop => (
          <Col md={6} lg={4} key={laptop.id} className="mb-4">
            <Card>
              <Card.Img 
                variant="top" 
                src={laptop.image} 
                alt={`${laptop.brand} ${laptop.model}`}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  <strong>Year:</strong> {laptop.year}<br />
                  <strong>Price:</strong> {laptop.price}
                </Card.Text>
                <Link to={`/laptops/${laptop.id}`}>
                  <Button variant="info" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredLaptops.length === 0 && (
        <Alert variant="info">No laptops found matching your search criteria.</Alert>
      )}
    </Container>
  );
};

export default LaptopList;
