import React from 'react';

const Services = ({id}) => {
    return (
            <section id={id} className="py-5 bg-white">

         <div className="container bg-white pt-5 pb-3">
  <div className="row px-3">
    <div className="col-12">
      <h2 className="title position-relative pb-2 mb-4">Services</h2>
    </div>
    <div className="col-md-6 service-item text-center mb-3">
      {/* <i className="fa fa-2x fi fi-ss-code-editing mx-auto mb-4" /> */}
<i className="fa fa-2x fi fi-rs-code-editing mx-auto mb-4"></i>
      <h5 className="mb-2">Web Devlopment</h5>
      <p>We build fast, scalable, and stunning websites that convert.
From frontend finesse to backend power — we handle it all.
Launch your digital presence with code that performs and design that inspires.
</p>
    </div>
    <div className="col-md-6 service-item text-center mb-3">
      <i className="fab fa-2x fa-android mx-auto mb-4" />
      <h5 className="mb-2">Apps Development</h5>
      <p>We design and develop mobile apps that scale with your vision.
From sleek UI to powerful backend — your idea becomes reality.
Launch faster, perform better, and grow smarter with our app solutions.
</p>
    </div>
    <div className="col-md-6 service-item text-center mb-3">
      <i className="fa fa-2x fa-search mx-auto mb-4" />
      <h5 className="mb-2">SEO</h5>
      <p>Rank higher, reach farther — we optimize your site for real results.
From meta tags to Google integrations, we make your brand discoverable.
SEO that drives traffic, boosts engagement, and grows your business.
</p>
    </div>
    <div className="col-md-6 service-item text-center mb-3">
      <i className="fa fa-2x fa-edit mx-auto mb-4" />
      <h5 className="mb-2">Content Creating</h5>
      <p>JWe craft content that connects, converts, and builds your brand.
From blogs to social posts — every word is designed to deliver impact.
Engage your audience with storytelling that drives results.
</p>
    </div>

     <div className="col-md-6 service-item text-center mb-3">
     
      <i className="fa fa-2x  fi fi-rs-microchip-ai mx-auto mb-4"></i>
     
      <h5 className="mb-2">AI devlopment</h5>
      <p>We build intelligent systems that learn, adapt, and deliver results.
From smart recommendations to predictive analytics — AI that powers your product.
Turn data into decisions with scalable, real-world AI solutions.
</p>
    </div>

     <div className="col-md-6 service-item text-center mb-3">
      <i className="fa fa-2x fa-microchip-ai mx-auto mb-4" />
      <h5 className="mb-2">Android devlopment</h5>
      <p>We build fast, intuitive Android apps tailored to your users.
From sleek UI to robust backend — your idea, fully mobile.
Launch on Play Store with performance, scalability, and style.
</p>
    </div>
  </div>
</div>
</section>

    );
}

export default Services;
