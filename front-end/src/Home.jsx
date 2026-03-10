import React from 'react'
import './Home.css'

const Home = props => {
  return (
    <div className="HomePage">
      <header className="site-header">
        <div className="title">Swipe and Match</div>
      </header>
      <main className="main-content">
        <section className="match-card">
          <div className="profile-photo-container">
            <img className="profile-photo-img" 
          src="https://img.freepik.com/premium-photo/face-profile-vision-with-man-studio-gray-background-with-space-future-planning-ideas-mockup-thinking-with-serious-business-person-contemplation-problem-solving-job_590464-393947.jpg?semt=ais_hybrid&w=740&q=80" />
          </div>
          <div className="details">
            <p><strong>Name:</strong> Lorem Ipsum</p>
            <p><strong>Role:</strong> hendrerit</p>
            <p><strong>Goal:</strong> Phasellus molestie</p>
            <p><strong>Focus:</strong> [finibus risus] [dignissim]</p>
            <p><strong>Availability:</strong> Quisque consequat</p>
          </div>
        </section>
        <section className="actions">
          <button className="btn accept">✔</button>
          <button className="btn reject">✖</button>
        </section>
      </main>
    </div>
  )
}

export default Home
