import React from 'react';
import './Explore.css';

const Explore = (props) => (
  <div className="ExplorePage">
    <header className="site-header">

    </header>
    <main className="main-content">
      <input className="search-bar" placeholder="search : SDE/PM/ML" />
      <section className="explore-list">
        <div className="explore-card">
          <div className="explore-image">
            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg" alt="Profile" />
          </div>
          <div className="explore-details">
            <strong>Name:</strong> Phasellus<br/>
            <strong>Role:</strong> accumsan<br/>
            <strong>Goal:</strong> nibh
            <strong>Schedule:</strong> consequat orci vel nibh
            <strong>Skills:</strong> Aenean imperdiet purus eu elit congue, diam vel tortor semper
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-image">
            <img src="https://photodpshare.com/wp-content/uploads/2025/10/hd-cute-profile-pic-for-girls-pinterest.jpg" alt="Profile" />
          </div>
          <div className="explore-details">
            <strong>Name:</strong> Phasellus<br/>
            <strong>Role:</strong> accumsan<br/>
            <strong>Goal:</strong> nibh
            <strong>Schedule:</strong> consequat orci vel nibh
            <strong>Skills:</strong> Aenean imperdiet purus eu elit congue, diam vel tortor semper
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/049/005/556/small/profile-shot-of-a-beautiful-young-brunette-with-wind-swept-hair-against-a-white-backdrop-photo.jpg" alt="Profile" />
            </div>
          <div className="explore-details">
            <strong>Name:</strong> Phasellus<br/>
            <strong>Role:</strong> accumsan<br/>
            <strong>Goal:</strong> nibh
            <strong>Schedule:</strong> consequat orci vel nibh
            <strong>Skills:</strong> Aenean imperdiet purus eu elit congue, diam vel tortor semper
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-image">
            <img src="https://pbs.twimg.com/media/EUQ3s_MUEAAD1us.jpg" alt="Profile" />
          </div>
          <div className="explore-details">
            <strong>Name:</strong> Phasellus<br/>
            <strong>Role:</strong> accumsan<br/>
            <strong>Goal:</strong> nibh
            <strong>Schedule:</strong> consequat orci vel nibh
            <strong>Skills:</strong> Aenean imperdiet purus eu elit congue, diam vel tortor semper
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/046/960/853/small/a-close-up-side-profile-of-a-young-man-with-dark-wavy-hair-dressed-in-a-suit-and-white-shirt-gazing-off-to-the-side-photo.jpg" alt="Profile" />
          </div>
          <div className="explore-details">
            <strong>Name:</strong> Phasellus<br/>
            <strong>Role:</strong> accumsan<br/>
            <strong>Goal:</strong> nibh
            <strong>Schedule:</strong> consequat orci vel nibh
            <strong>Skills:</strong> Aenean imperdiet purus eu elit congue, diam vel tortor semper
          </div>
        </div>
        {/* Add more cards as needed */}
      </section>
    </main>
  </div>
);

export default Explore;
