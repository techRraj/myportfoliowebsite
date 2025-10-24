import React from 'react';

const Education = ({id}) => {
    return (
      <section id={id} className="py-5 bg-white">
       <div>

  <div className="container bg-white py-5">
    <div className="row px-3">
      <div className="col-12">
        <h2 className="title position-relative pb-2 mb-4">Expericence</h2>
      </div>
      <div className="col-12">
        <div className="border-left border-primary pt-2 pl-4 ml-2">
          <div className="position-relative mb-4">
            <i className="fa fa-arrow-right text-primary position-absolute" style={{top: 3, left: '-24px'}} />
            <h5 className="mb-1">Mern stack devlopment</h5>
            <p className="mb-2 text-primary">Bheema infotech.in
 | <small> Jan 2025 – Mar 2025</small></p>
            <p>Developed responsive web applicaƟons using
React, Node.js, Express, and MongoDB. 
</p>
<p>Built RESTful APIs for seamless frontendbackend communicaƟon.</p>
<p>Collaborated with team members on code
reviews and debugging</p>
<p>Improved applicaƟon performance by
opƟmizing database queries</p>
          </div>
          <div className="position-relative mb-4">
            <i className="fa fa-arrow-right text-primary position-absolute" style={{top: 3, left: '-24px'}} />
            <h5 className="mb-1">Web Development </h5>
            <p className="mb-2 text-primary">UnizZ Tech | <small>Oct 2024 – Dec 2024</small></p>
            <p>Assisted in developing staƟc and dynamic
websites using HTML, CSS, JavaScript, and
React</p>
<p>Integrated third-party APIs for real-Ɵme data
fetching. </p>
<p>Gained hands-on experience in version control
using Git/GitHub. 
</p>
          </div>
        
        </div>
      </div>
    </div>
  </div>   
</div>
</section>
    );
}

export default Education;
