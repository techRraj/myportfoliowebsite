// src/components/Sidebar.jsx
import React, { useEffect, useRef, useMemo, useState } from 'react';
import Typed from 'typed.js';

const Sidebar = ({ activeSection = 'about' }) => {
  const typedRef = useRef(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  // Memoize section labels to prevent recreation on every render
  const sectionLabels = useMemo(() => ({
    about: 'About Me',
    skills: 'Skills',
    education: 'Education',
    subscribe: 'Subscribe',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact'
  }), []);
  
  const socialLinks = useMemo(() => [
    {
      href: 'https://www.linkedin.com/in/rajkumar-chourasiya-06548622a/',
      icon: 'fa-linkedin-in',
      label: 'LinkedIn'
    },
    {
      href: 'https://instagram.com/your_insta',
      icon: 'fa-instagram',
      label: 'Instagram'
    },
    {
      href: 'https://github.com/techRraj',
      icon: 'fa-github',
      label: 'GitHub'
    }
  ], []);

  useEffect(() => {
    if (!typedRef.current) return;
    
    const typed = new Typed(typedRef.current, {
      strings: [
        'AI AGENT DEVELOPER',
        'MERN Stack Developer',
        'Full Stack Developer',
        'Android Developer',
        'Java Developer',
        'API Integration Specialist'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-sidebar-toggle d-lg-none"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle sidebar"
      >
        <i className={`fas ${isMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      <div className={`sidebar ${isMobileOpen ? 'active' : ''}`}>
        <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center px-3">
          <img
            className="w-100 img-fluid mb-4 rounded-circle"
            src="/img/dpRaj.jpeg"
            alt="Rajkumar Chourasiya"
            style={{ maxWidth: '150px', margin: '0 auto' }}
          />
          <h1 className="mt-2">Rajkumar Chourasiya</h1>

          {/* Typed.js Output */}
          <h4
            className="typed-text-output d-inline-block text-body mb-4"
            ref={typedRef}
          >
            <span className="sr-only">Developer roles typing animation</span>
          </h4>
          
          {/* ScrollSpy Indicator */}
          <div className="mb-4 py-2 bg-light rounded" style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
            <small className="text-muted d-block" style={{ color: '#94a3b8' }}>Now viewing:</small>
            <strong className="text-gradient">{sectionLabels[activeSection] || 'Home'}</strong>
          </div>

          {/* Social Links */}
          <div className="d-flex justify-content-center mt-auto mb-3 gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                <i className={`fab ${link.icon} fa-lg`}></i>
              </a>
            ))}
          </div>

          <div className="d-flex align-items-end justify-content-between w-100 gap-2">
            <a
              href="/Rajkumar_FullStack_AI_Engineer.pdf"
              download
              className="btn btn-outline-primary flex-fill mx-1"
            >
              <i className="fas fa-download me-1"></i>
              <span className="d-none d-md-inline">CV</span>
            </a>
            <a
              href="#contact"
              className="btn btn-primary flex-fill mx-1"
            >
              <i className="fas fa-envelope me-1"></i>
              <span className="d-none d-md-inline">Contact</span>
            </a>
          </div>
        </div>

        {/* Right arrow for collapsed view */}
        <div className="sidebar-icon d-none d-lg-flex flex-column h-100 justify-content-center text-right px-2">
          <i className="fas fa-2x fa-angle-double-right text-primary" />
        </div>
      </div>
      
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="sidebar-overlay d-lg-none"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
