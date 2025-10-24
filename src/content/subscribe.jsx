import React from 'react';

const Subscribe = ({id}) => {
    return (
          <section id={id} className="py-5 bg-white">

   <div>
 
  <div className="container bg-white py-5 px-0">
    <div className="bg-primary text-center p-5">
      <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
      <p className="text-white">Subscribe and get my latest article in your inbox</p>
      <form className="form-inline justify-content-center">
        <div className="input-group">
          <input type="text" className="form-control border-0 p-4" placeholder="Your Email" />
          <div className="input-group-append">
            <button className="btn btn-dark px-4" type="submit">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  </div>  
</div>
</section>
    );
}

export default Subscribe;
