import React from 'react';
import './ScheduleHub.css';

const ScheduleHub = () => (
  <div className="ScheduleHubPage">

    <main className="main-content">
      <section className="interview-card">
        <h2>Upcoming Interviews</h2>
        <p><strong>Date:</strong> May 7th</p>
        <p><strong>Time:</strong> 7:00 PM</p>
        <p><strong>With:</strong> Kevin (NYU)</p>
        <p><strong>Type:</strong> System Design</p>
        <div className="interview-actions">
          <button>Add to Google Calendar</button>
          <button>Cancel</button>
        </div>
      </section>
      <section className="interview-card">
        <h2>Upcoming Interviews</h2>
        <p><strong>Date:</strong> May 20th</p>
        <p><strong>Time:</strong> 8:00 PM</p>
        <p><strong>With:</strong> Jake (NYU)</p>
        <p><strong>Type:</strong> Data Structure</p>
        <div className="interview-actions">
          <button>Add to Google Calendar</button>
          <button>Cancel</button>
        </div>
      </section>
      <section className="interview-card">
        <h2>Upcoming Interviews</h2>
        <p><strong>Date:</strong> April 12th</p>
        <p><strong>Time:</strong> 2:00 PM</p>
        <p><strong>With:</strong> David (NYU)</p>
        <p><strong>Type:</strong> Algorithm </p>
        <div className="interview-actions">
          <button>Add to Google Calendar</button>
          <button>Cancel</button>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <a href="/home" className="footer-btn">Swipe & Match</a>
      <a href="/explore" className="footer-btn">Explore</a>
      <a href="/chat" className="footer-btn">Chat</a>
      <a href="/settings" className="footer-btn">Settings</a>
    </footer>
  </div>
);

export default ScheduleHub;
