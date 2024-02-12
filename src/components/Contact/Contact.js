import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Cain LeDuc" />
        <input type="email" placeholder="cain6gates@gmail.com" />
        <textarea placeholder="Thank you for taking the time look through my react portfolio!"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
