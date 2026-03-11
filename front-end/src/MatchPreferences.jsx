import React from 'react';
import './MatchPreferences.css';
import { Link } from 'react-router-dom';

const MatchPreferences = () => (
  <div className="MatchPreferencesPage">
    <div className="match-preferences-content">
      <div className="match-header">Match Preferences</div>
      <div className="skills-boxes">
        <div className="skill-box">Leetcode</div>
        <div className="skill-box">JavaScript</div>
        <div className="skill-box">System Design</div>
        <div className="skill-box">R</div>
        <div className="skill-box">Python</div>
        <div className="skill-box">Startup Project</div>
        <div className="skill-box">Web Development</div>
      </div>
    </div>
  </div>
);

export default MatchPreferences;
