import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

const Register = props => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('User registered:', formData)
    navigate('/login')
  }

  return (
    <div className="Register">
      <header>
        <h1>Nice to meet you!</h1>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Agree & Register          <Link to="/login2" className="login-link">
          </Link>
          </button>
        </form>
        <p className="login-prompt">
          Already have an account?{' '}
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </p>
      </section>
    </div>
  )
}

export default Register
