import React from 'react';
import './aboutme.css';

function AboutMe() {
  return (
    <div className="aboutme">
      <h2>About Me</h2>
      {/* Adding the image */}
      <img src={`${process.env.PUBLIC_URL}/Assets/IMG_0070.JPG`} alt="Cain" className="profile-photo" />
      <p>Hello! I'm Cain, a passionate web developer with a slight focus on React.js projects. I love creating interactive and user-friendly applications.</p>
    </div>
  );
}

export default AboutMe;
