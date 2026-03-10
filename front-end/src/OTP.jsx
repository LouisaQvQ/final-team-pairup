import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OTP.css'

const OTP = props => {
  const [otp, setOtp] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    console.log('OTP verified:', otp)
    navigate('/create-password')
  }

  return (
    <div className="OTP">
      <header>
        <h1>OTP Verification</h1>
        <p className="subtitle">
          Check your email and enter the code we sent
        </p>
      </header>
      <section className="main-content">
        <form onSubmit={handleSubmit} className="otp-form">
          <input
            type="text"
            placeholder="Enter the OTP code"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Verify
          </button>
        </form>
      </section>
    </div>
  )
}

export default OTP
