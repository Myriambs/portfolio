// import React, { useState } from 'react';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  //   alert('Thank you for your message! I\'ll get back to you soon.');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content" >
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>bensalah.meriem0@email.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>-----</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Tunis,Tunisia</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/alexjohnson</p>
            </div>
          </div>
          
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;