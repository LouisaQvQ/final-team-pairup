import React from 'react'
import './PrimaryNav.css'
import { Link } from 'react-router-dom'

const PrimaryNav = props => {
  // we assume a function named setuser is passed as a prop to this component

  // show a login link if the user is not yet logged in
  let logInOutComponent = <Link to="/login">Login</Link>
  // show a logout link if the user is already logged in
  if (props.user.success)
    logInOutComponent = (
      <>
        <Link to="/logout">Logout {props.user.username}</Link>
      </>
    )

  return (
    <>
      <nav className="top-nav">
        <Link to="/schedule">Schedule Hub</Link>
        <Link to="/about">Notification</Link>
      </nav>
      <footer className="site-footer">
        <div className="footer-text">
        <Link to="/home" className="footer-btn">Swipe & Match</Link>
        <Link to="/explore" className="footer-btn">Explore</Link>
        <Link to="/chat" className="footer-btn">Chat</Link>
        <Link to="/settings" className="footer-btn">Settings</Link>
        </div>
      </footer>
    </>
  )
}

export default PrimaryNav
