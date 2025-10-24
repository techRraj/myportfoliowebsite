// src/components/Header.jsx
import React from 'react';

const Header = ({ activeSection }) => {
  const sectionLabels = {
    about: 'About Me',
    skills: 'Skills',
    education: 'Education',
    subscribe: 'Subscribe',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact'
  };

  return (
    <header className="fixed-top bg-primary shadow-sm" >
      <div className="container-fluid px-4 py-2 d-flex align-items-center">
        <div className="d-flex align-items-center">
          {/* <span className="me-2" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            📍 Now in:
          </span> */}
          <h5
            className="me-2 text-white "
            style={{
            fontSize: '2.1rem', fontWeight: '600',
             
              transition: 'all 0.3s ease'
            }}
          >
            {sectionLabels[activeSection] || 'Home'}
          </h5>
        </div>
      </div>
    </header>
  );
};

export default Header;