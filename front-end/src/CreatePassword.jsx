import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePassword.css'

const CreatePassword = props => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confirmPassword) {
      console.log('Password reset:', password)
      navigate('/password-changed')
    } else {
      alert('Passwords do not match')
    }
  }

  return (
    <div className="CreatePassword">
      <header>
        <h1>Reset Password</h1>
        <p className="subtitle">
          Your new password must be different from previous ones.
        </p>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Reset Password
          </button>
        </form>
      </section>
    </div>
  )
}

export default CreatePassword
