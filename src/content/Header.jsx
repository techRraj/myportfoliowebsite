// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sectionLabels = {
    about: 'About Me',
    skills: 'Skills',
    education: 'Education',
    subscribe: 'Subscribe',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="d-flex align-items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
        <h5 
          className="text-gradient mb-0 ms-3"
          style={{
            fontSize: '1.5rem', 
            fontWeight: '700',
            transition: 'all 0.3s ease'
          }}
        >
          {sectionLabels[activeSection] || 'Home'}
        </h5>
      </div>

      {/* Desktop Navigation */}
      <nav className="d-none d-lg-flex align-items-center gap-1">
        {Object.entries(sectionLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => scrollToSection(key)}
            className={`btn btn-sm ${
              activeSection === key 
                ? 'btn-primary' 
                : 'btn-outline-primary'
            }`}
            style={{
              padding: '0.5rem 1rem',
              opacity: activeSection === key ? 1 : 0.8
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="position-absolute top-100 start-0 w-100 bg-secondary shadow-lg p-3 d-lg-none"
          style={{ 
            zIndex: 998,
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <nav className="d-flex flex-column gap-2">
            {Object.entries(sectionLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`btn text-start ${
                  activeSection === key 
                    ? 'btn-primary' 
                    : 'text-secondary'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;