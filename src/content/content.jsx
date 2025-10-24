import React from 'react';
import About from './about';
import Skills from './skills';
import Education from './education';
import Subscribe from './subscribe';
import Services from './services';
import Portfolio from './portfolio';
// import Testimonial from './testimonial';
import Contact from './contact';
import Footer from './footer';
import WhatsAppButton from './WhatsAppButton';
const Content = () => {
    return (
        <div className='content'>
            <About id= "about"/>
            <Skills id= "skills"/>
            <Education id= "education"/>
            <Subscribe id= "subscribe"/>
            <Services id= "services"/>
            <Portfolio id= "portfolio"/>
            {/* <Testimonial/> */}
            <Contact id= "contact"/>
            <Footer id="footer" />
             <WhatsAppButton  />

        </div>
    );
}

export default Content;
