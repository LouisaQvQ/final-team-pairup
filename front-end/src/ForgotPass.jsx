import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ForgotPass.css'

const ForgotPass = props => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Password reset code sent to:', email)
    navigate('/otp')
  }

  return (
    <div className="ForgotPass">
      <header>
        <h1>Forgot Your Password?</h1>
        <p className="subtitle">
          Don't worry, it happens. Please enter the email address linked with your account.
        </p>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="forgot-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Send Code
          </button>
        </form>
        <p className="back-link">
          <Link to="/login">Back to Login</Link>
        </p>
      </section>
    </div>
  )
}

export default ForgotPass
