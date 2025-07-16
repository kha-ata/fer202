import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotFoundPage = ({ message = "404 - Page Not Found" }) => {
  return (
    <Container className="mt-5 text-center">
      <Alert variant="danger">
        <Alert.Heading>Oops!</Alert.Heading>
        <p>{message}</p>
      </Alert>
      <Link to="/laptops">
        <Button variant="primary">Go to Laptop List</Button>
      </Link>
    </Container>
  );
};

NotFoundPage.propTypes = {
  message: PropTypes.string
};

export default NotFoundPage;
