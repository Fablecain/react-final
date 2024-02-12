import React from 'react';
import './project.css';

function Project({ title, link }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p><a href={link}>View Project</a></p>
    </div>
  );
}

export default Project;
