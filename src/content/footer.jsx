import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({id}) => {
  return (
    <>
<section id={id} className="py-5 bg-white">
    <div className="container-fluid bg-white pt-5 px-0">
      <div className="container bg-dark text-light text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          {/* External links: use <a> instead of <Link> */}
          <Link
            to="https://www.linkedin.com/in/rajkumar-chourasiya-06548622a/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-square mr-2"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </Link>
          <Link
            to="https://github.com/techRraj" // 🔴 Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-square mr-2"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </Link>
          <Link
            to="https://instagram.com/your-instagram" // 🔴 Replace with your Instagram (or remove if not used)
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-square"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <Link to="#" className="text-white">Privacy</Link>
          <span className="px-3">|</span>
          <Link to="#" clLinkssName="text-white">Terms</Link>
          <span className="px-3">|</span>
          <Link to="#" className="text-white">FAQs</Link>
          <span className="px-3">|</span>
          <Link to="#" className="text-white">Help</Link>
        </div>
        <p className="m-0">© All Rights Reserved. Designed by RAJKUMAR</p>
      </div>
    </div>
    </section>
    </>
   
  );
};

export default Footer;