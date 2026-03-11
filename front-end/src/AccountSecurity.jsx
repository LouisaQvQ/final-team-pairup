import React, { useState } from 'react';
import './AccountSecurity.css';
import { useNavigate } from 'react-router-dom';

const AccountSecurity = props => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
    const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confirmPassword) {
      if (email) {
        console.log('Send code to:', email)
        navigate('/otp')
      } else {
        alert('Please enter your email')
      }
    }
}
  return (
    <div className="AccountSecurity">
      <header>
        <h1>Change your password?</h1>
        <p className="subtitle">
          Please enter the email addresss linked to your account.
        </p>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="password-form">
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
      </section>
    </div>
  )

}
export default AccountSecurity;
