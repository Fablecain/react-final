import React from 'react';
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {/* Placeholder for project components */}
        <p>Project 1: <a href="https://github.com/Fablecain/note-pad-foot">Link to Project 1</a></p>
        <p>Project 2: <a href="https://github.com/Fablecain/crewcrunch">Link to Project 2</a></p>
      </div>
    </div>
  );
}

export default Portfolio;
