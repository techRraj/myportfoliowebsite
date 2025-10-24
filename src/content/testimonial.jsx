import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonial.css'; // Your custom styles

const testimonials = [
  {
    text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos...",
    image: "img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos...",
    image: "img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos...",
    image: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
  },
];

const Testimonial = ({id}) => {
  return (
        <section id={id} className="py-5 bg-white">

    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Testimonial</h2>
        </div>
        <div className="col-12">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={true}
            speed={1500} // 2 seconds swipe transition
            spaceBetween={20}
            slidesPerView={1}
            className="testimonial-carousel"
           
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="text-left">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="text-body mb-4">{t.text}</h4>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid"
                      src={t.image}
                      alt={t.name}
                      style={{ width: '60px', height: '60px', borderRadius: '50%' }}
                    />
                    <div className="pl-3">
                      <h5 className="text-primary m-0">{t.name}</h5>
                      <i>{t.profession}</i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;