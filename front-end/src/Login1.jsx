import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './logo.svg';
import './Login1.css'

const Login1 = props => {
  return (
    <div className="Login1">
      <h1>PairUp</h1>
      <img className="image" 
      src="https://media.licdn.com/dms/image/v2/D560BAQHBDFvZcfxU2A/company-logo_200_200/company-logo_200_200/0/1690917602570/pair_up_inc_logo?e=2147483647&v=beta&t=bG5FbuJKSYcKxPdLJtlZbiWg2PkpJN2uk5cJeIJBdCc" />
      <section className="main-content">
        <Link className="button login" to="/login">
          Log In
        </Link>
        <Link className="button signup" to="/signup">
          Sign Up
        </Link>
      </section>
    </div>
  )
}

export default Login1
