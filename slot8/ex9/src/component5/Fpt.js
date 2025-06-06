import React from 'react';
import { Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fpt() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header Section */}
      <div style={{ backgroundColor: '#FF8C42' }} className="py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="bg-white p-4 rounded mb-3">
                <Image 
                  src="https://cdn.haitrieu.com/wp-content/uploads/2023/05/Logo-Truong-Cao-dang-FPT-Polytechnic.png"
                  alt="FPT University Logo"
                  style={{ maxWidth: '300px', height: 'auto' }}
                  fluid
                />
              </div>
              <Navbar expand="lg" className="justify-content-center">
                <Nav>
                  <Nav.Link href="#home" className="text-white mx-3">Home</Nav.Link>
                  <Nav.Link href="#about" className="text-white mx-3">About</Nav.Link>
                  <Nav.Link href="#contact" className="text-white mx-3">Contact</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            {/* About Section */}
            <div className="mb-4">
              <h2 className="mb-3">About</h2>
              <p className="text-muted">
                This is the about section of the website.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mb-4">
              <h2 className="mb-3">Contact</h2>
              <p className="text-muted">
                For any inquiries, please contact us at example@example.com.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: '#F4D03F' }} className="py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <small className="text-muted">
                © 2024 Website. All rights reserved.
              </small>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Fpt;