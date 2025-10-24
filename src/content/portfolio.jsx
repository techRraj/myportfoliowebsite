// src/components/Portfolio.jsx
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'font-awesome/css/font-awesome.min.css';

const Portfolio = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState('*');

  const images = [
    {
      src: '/img/portfolio-1.png',
      category: 'first',
      title: 'AI Image Generator',
      description: 'Transform words into art in seconds.'
    },
    {
      src: '/img/portfolio-2.png',
      category: 'second',
      title: 'Forex Trading Dashboard',
      description: 'Real-time market analysis & risk management.'
    },
    {
      src: '/img/portfolio-3.png',
      category: 'first',
      title: 'E-commerce Store',
      description: 'Online store with product filtering & cart.'
    },
    {
      src: '/img/portfolio-4.png',
      category: 'second',
      title: 'Hospital Management System',
      description: 'Patient records, appointments, billing.'
    },
  ];

  const filteredImages = filter === '*'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <>
      <section id={id} className="py-5 bg-white">
        <div className="container px-3">
          <div className="row">
            <div className="col-12">
              <h2 className="title position-relative pb-2 mb-4">Portfolio</h2>
            </div>

            {/* Filter Buttons */}
            <div className="col-12 text-center mb-4">
              <ul className="list-inline mb-0" id="portfolio-flters">
                <li
                  className={`btn btn-outline-primary ${filter === '*' ? 'active' : ''}`}
                  onClick={() => setFilter('*')}
                >
                  <i className="fa fa-star mr-2" />All
                </li>
                <li
                  className={`btn btn-outline-primary ${filter === 'first' ? 'active' : ''}`}
                  onClick={() => setFilter('first')}
                >
                  <i className="fi fi-rs-magic-wand mr-2" />Design
                </li>
                <li
                  className={`btn btn-outline-primary ${filter === 'second' ? 'active' : ''}`}
                  onClick={() => setFilter('second')}
                >
                  <i className="fi fi-rs-code-window mr-2" />Development
                </li>
              </ul>
            </div>

            {/* Centered 2-Column Grid */}
            <div className="row g-4 justify-content-center">
              {filteredImages.map((img, i) => (
                <div
                  key={i}
                  className={`col-12 col-md-6 portfolio-item ${img.category}`}
                  style={{ cursor: 'pointer', maxWidth: '400px' }} // Optional: limit max width
                  onClick={() => { setIndex(i); setOpen(true); }}
                >
                  {/* Card Container */}
                  <div
                    className="card h-100"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid #dee2e6',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    {/* Image Container */}
                    <div
                      className="position-relative"
                      style={{
                        height: '200px', // Fixed height for all images
                        backgroundColor: '#f8f9fa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={img.src}
                        alt={img.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          padding: '10px'
                        }}
                      />
                      {/* Hover overlay */}
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                          background: 'rgba(0,0,0,0.5)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          color: 'white',
                          fontSize: '2rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                      >
                        <i className="fa fa-plus" />
                      </div>
                    </div>

                    {/* Project Title & Description */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-1">{img.title}</h5>
                      <p className="card-text text-muted small mb-0">{img.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={filteredImages.map(img => ({ src: img.src, title: img.title, description: img.description }))}
          index={index}
          on={{ view: ({ index }) => setIndex(index) }}
          render={{ 
            caption: ({ slide }) => (
              <div style={{ textAlign: 'center', padding: '10px', background: 'rgba(0,0,0,0.7)', color: 'white' }}>
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
              </div>
            )
          }}
        />
      </section>
    </>
  );
};

export default Portfolio;