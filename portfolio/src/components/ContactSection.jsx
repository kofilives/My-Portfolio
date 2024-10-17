import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert(`Message from ${formData.name} has been sent!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section p-5 mb-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5 text-warning fw-bolder" data-aos="zoom-in">CONTACT ME</h2>
        <div className="row justify-content-around">
            <div className='col-lg-6'>
                
                <img src="./src/assets/images/logo.png" alt="logo" className='rounded h-75 w-75'/>
                
                
                
            </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3" data-aos="fade-right">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3" data-aos="fade-right">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4" data-aos="fade-right">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  required
                />
              </div>
              <div className="d-grid gap-2" data-aos="fade-up">
                <button type="submit" className="btn btn-warning btn-block">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
