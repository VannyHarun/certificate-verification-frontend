import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-content">
        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            At Certificate Verification System, our mission is to provide a secure, transparent, and 
            efficient platform for issuing and verifying educational certificates. We aim to eliminate 
            certificate fraud and simplify the verification process for educational institutions, 
            employers, and students.
          </p>
        </section>
        
        <section className="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in 2025, Certificate Verification System was created in response to the growing 
            problem of certificate fraud in the education sector. Our team of education and technology 
            experts came together to develop a solution that leverages modern technology to ensure 
            certificate authenticity.
          </p>
        </section>
        
        <section className="about-section">
          <h3>Our Technology</h3>
          <p>
            We use advanced cryptographic techniques to secure certificate data and provide a 
            tamper-proof verification system. Each certificate is assigned a unique hash that 
            can be used to verify its authenticity instantly, making the verification process 
            simple and reliable.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs; 