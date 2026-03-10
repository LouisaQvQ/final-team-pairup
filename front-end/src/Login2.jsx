import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login2.css'

const Login2 = props => {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div className="Login2">
      <header>
        <h1>Welcome to PairUp</h1>
        <p className="subtitle">
          Your go-to-app for finding a mock interview buddy
        </p>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Enter your email or username"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <div className="forgot-container">
            <a href="/forgot" className="forgot-link">Forgot password?</a>
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="signup-prompt">
          Don’t have an account?{' '}
          <a href="/signup" className="signup-link">
            Sign up here
          </a>
        </p>
      </section>
    </div>
  )
}

export default Login2
