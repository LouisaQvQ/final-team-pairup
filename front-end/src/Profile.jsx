import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => (
  <div className="ProfilePage">
    <div className="site-header">
        Profile
    </div>
    <div className="profile-content">
      <div className="profile-image-section">
        <div className="profile-image">Image</div>
        <div className="profile-details">
          <div className="profile-name">Name: Lorem Ipsum</div>
          <button className="edit-profile-btn">Edit profile</button>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-label">Introduction</div>
        <div className="profile-box">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia nec nisl sed venenatis.</div>
      </div>
      <div className="profile-section">
        <div className="profile-label">Goal</div>
        <div className="profile-box">Aliquam in sem at lorem consectetur malesuada ac eu ex.</div>
      </div>
      <div className="profile-section">
        <div className="profile-label">Availability</div>
        <div className="profile-box">Mauris a enim metus. Phasellus</div>
      </div>
      <div className="profile-section">
        <div className="profile-label">Skills</div>
        <div className="profile-box">Integer finibus lacus aliquet augue iaculis fringilla. Nam sed accumsan nibh, nec pellentesque est. Vestibulum eu lacus eget erat lobortis feugiat eget imperdiet mauris. Proin in diam risus.</div>
      </div>
    </div>
  </div>
);

export default Profile;
