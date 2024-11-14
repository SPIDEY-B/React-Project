// ContactPage.js
import React from 'react';


const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We are here to assist you with any inquiries.</p>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email Us</h3>
          <p>Reach out at <a href="mailto:support@ebookstore.com">support@ebookstore.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Customer Support</h3>
          <p>Available 24/7 to help with your orders and account</p>
        </div>
        <div className="contact-item">
          <h3>Return Policy</h3>
          <p>Contact us within 30 days for eligible returns</p>
        </div>
        <div className="contact-item">
          <h3>Feedback</h3>
          <p>We value your feedback to improve our services</p>
        </div>
        <div className="contact-item">
          <h3>Social Media</h3>
          <p>Follow us on social platforms to stay updated</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
