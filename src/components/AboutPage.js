// AboutUs.js
import React from 'react';
 // Assume there's a CSS file to style the page

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to our e-book store, where we make reading accessible to everyone.</p>
      <div className="about-details">
        <div className="about-item">
          <h3>Our Mission</h3>
          <p>To provide a diverse selection of e-books at competitive prices.</p>
        </div>
        <div className="about-item">
          <h3>Our Collection</h3>
          <p>Thousands of e-books across genres, curated for all age groups.</p>
        </div>
        <div className="about-item">
          <h3>Why Choose Us</h3>
          <p>User-friendly website, secure transactions, and excellent support.</p>
        </div>
        <div className="about-item">
          <h3>Quality Assurance</h3>
          <p>Only high-quality, verified e-books from trusted publishers.</p>
        </div>
        <div className="about-item">
          <h3>Customer Commitment</h3>
          <p>Our priority is your satisfaction, making your reading experience enjoyable.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
