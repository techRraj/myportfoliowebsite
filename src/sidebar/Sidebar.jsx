// src/components/Sidebar.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

// External links → use <a>, not <Link>
const Sidebar = ({ activeSection = 'about' }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
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

  // Section label mapping
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
    <div className="sidebar">
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center px-3">
      
 <img
          className="w-100 img-fluid mb-4 rounded-circle"
         src="/img/profileraj.png"
          alt="Rajkumar Chourasiya"
          style={{ maxWidth: '100%', margin: '0 auto' }}
        />
        <h1 className="mt-2">Rajkumar Chourasiya</h1>

        <div className="mb-4" style={{ height: '22px' }}>
          <h4 className="typed-text-output d-inline-block text-body" ref={typedRef}></h4>
        </div>

        {/* 👇 ScrollSpy Indicator */}
        <div className="mb-4 py-2 bg-light rounded">
          <small className="text-muted d-block">Now viewing:</small>
          <strong className="text-primary">{sectionLabels[activeSection] || 'Home'}</strong>
        </div>

        {/* Social Links — use <a> for external URLs */}
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a
            href="https://www.linkedin.com/in/rajkumar-chourasiya-06548622a/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-decoration-none"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
          <a
            href="https://instagram.com/your_insta" // 🔴 Update or remove if not used
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-decoration-none"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://github.com/techRraj"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-decoration-none"
            aria-label="GitHub"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>

        <div className="d-flex align-items-end justify-content-between w-100">
          <a
            href="/rajperfect.pdf"
            download
            className="btn btn-outline-primary flex-fill mx-1"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="btn btn-primary flex-fill mx-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Optional: Right arrow for collapsed view (if you use hover-expand) */}
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right px-2">
        <i className="fas fa-2x fa-angle-double-right text-primary" />
      </div>
    </div>
  );
};

export default Sidebar;