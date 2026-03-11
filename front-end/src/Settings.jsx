import React from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';

const Settings = (props) => (
  <div className="SettingsPage">
    <main className="main-content">
      <Link to="/profile" className="settings-btn">Profile</Link>
      <Link to="/account-security" className="settings-btn">Account Security</Link>
      <Link to="/match-preferences" className="settings-btn">Match Preferences</Link>
    </main>
  </div>
);

export default Settings;
