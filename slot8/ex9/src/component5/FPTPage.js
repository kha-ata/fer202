import React from 'react';

function FPTPage() {
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
      <header style={{
        backgroundColor: '#FF8C42',
        padding: '40px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        {/* Logo Container */}
        <div style={{
          backgroundColor: 'white',
          display: 'inline-block',
          padding: '20px 40px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '10px'
          }}>
            <span style={{
              backgroundColor: '#1E90FF',
              color: 'white',
              padding: '5px 10px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>F</span>
            <span style={{
              backgroundColor: '#FF6B35',
              color: 'white',
              padding: '5px 10px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>P</span>
            <span style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '5px 10px',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>T</span>
            <span style={{
              color: '#1E90FF',
              fontWeight: 'normal',
              fontSize: '16px',
              marginLeft: '10px'
            }}>Education</span>
          </div>
          <h1 style={{
            color: '#FF6B35',
            fontSize: '28px',
            fontWeight: 'bold',
            margin: 0,
            letterSpacing: '2px'
          }}>FPT UNIVERSITY</h1>
        </div>
        
        {/* Navigation */}
        <nav style={{
          marginTop: '20px'
        }}>
          <a href="#home" style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px'
          }}>Home</a>
          <a href="#about" style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px'
          }}>About</a>
          <a href="#contact" style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            fontSize: '16px'
          }}>Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* About Section */}
        <section id="about" style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>About</h2>
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            This is the about section of the website.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>Contact</h2>
          <p style={{
            fontSize: '16px',
            color: '#666',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            For any inquiries, please contact us at example@example.com.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#F4D03F',
        textAlign: 'center',
        padding: '20px',
        color: '#666',
        fontSize: '14px'
      }}>
        © 2024 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default FPTPage;