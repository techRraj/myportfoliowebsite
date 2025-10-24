// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ id }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_8wlzc86',        // ✅ Your Service ID
        'template_uvivm0l',       // ✅ Your Template ID
        form.current,
        'SiVJdmgUpT9a4AQvJ'       // ✅ Your Public Key (User ID)
      )
      .then(
        () => {
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
        <section id={id} className="py-5 bg-white">

    <div className="container bg-white py-5" id="contact">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Contact Me</h2>
        </div>
        <div className="col-12">
          <div className="contact-form">
            {submitStatus === 'success' && (
              <div className="alert alert-success" role="alert">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-danger" role="alert">
                ❌ Failed to send message. Please  contact me directly on WhatsApp.
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} noValidate>
              <div className="form-row">
                <div className="control-group col-sm-6 mb-3">
                  <input
                    type="text"
                    className="form-control p-4"
                    name="from_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="control-group col-sm-6 mb-3">
                  <input
                    type="email"
                    className="form-control p-4"
                    name="reply_to"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="control-group mb-3">
                <input
                  type="text"
                  className="form-control p-4"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="control-group mb-3">
                <textarea
                  className="form-control py-3 px-4"
                  rows={5}
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>
              <div>
                <button
                  className="btn btn-primary py-3 px-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     </section>
  );
};

export default Contact;