import React from 'react';
import './Settings.css';

const Settings = (props) => (
  <div className="SettingsPage">

    <main className="main-content">
      <button className="settings-btn">Profile</button>
      <button className="settings-btn">Account Security</button>
      <button className="settings-btn">Match Preferences</button>
    </main>
  </div>
);

export default Settings;
