import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav>
          <div className="logo">AttendanceApp</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AttendanceApp</h1>
          <p>Effortless attendance management for organizations and institutions.</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 AttendanceApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
