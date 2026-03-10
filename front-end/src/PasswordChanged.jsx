import React from 'react'
import { Link } from 'react-router-dom'
import './PasswordChanged.css'

const PasswordChanged = props => {
  return (
    <div className="PasswordChanged">
      <header>
        <h1>Password Changed!</h1>
        <p className="subtitle">
          Your password has been successfully reset.
        </p>
      </header>
      <section className="main-content">
        <Link to="/login" className="login-button">
          Return to Login Page
        </Link>
      </section>
    </div>
  )
}

export default PasswordChanged
