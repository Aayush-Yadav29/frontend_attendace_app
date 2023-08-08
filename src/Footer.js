import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-link">Home</div>
        <div className="footer-link">About</div>
        <div className="footer-link">Enrolled</div>
        <div className="footer-link">Create</div>
      </div>
      <div className="footer-contact">
        <h2>Contact Us</h2>
      </div>
    </footer>
  );
};

export default Footer;
