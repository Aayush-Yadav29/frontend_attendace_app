import React from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to get in touch with us.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
