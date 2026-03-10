import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Login1 from './Login1'
import Login2 from './Login2'
import Logout from './Logout'
import ForgotPass from './ForgotPass'
import Register from './Register'
import OTP from './OTP'
import CreatePassword from './CreatePassword'
import PasswordChanged from './PasswordChanged'
import Home from './Home'
import PrimaryNav from './PrimaryNav'
import './App.css'
import Explore from './Explore'
import Chat from './Chat'
import Settings from './Settings'
import ScheduleHub from './ScheduleHub'

// set up routes so different URL routes load up different main components
const App = props => {
  const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any

  return (
    <div className="container">
      <Router basename={import.meta.env.BASE_URL}>
        <AppContent user={user} setUser={setUser} />
      </Router>
    </div>
  )
}

const AppContent = ({ user, setUser }) => {
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <>
      {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/forgot' && location.pathname !== '/signup' && location.pathname !== '/otp' && location.pathname !== '/create-password' && location.pathname !== '/password-changed' && <PrimaryNav user={user} setuser={setUser} />}
      <Routes>
        {/* a route to the Login1 screen */}
        <Route path="/" element={<Login1 user={user} />} />

        {/* a route to the log in form... this form is a placeholder only */}
        <Route
          path="/login"
          element={<Login2 user={user} setuser={setUser} />}
        />

        {/* homepage after login */}
        <Route path="/home" element={<Home user={user} navigate={navigate} />} />

        {/* a route to the forgot password form */}
        <Route
          path="/forgot"
          element={<ForgotPass user={user} />}
        />

        {/* a route to the signup/register form */}
        <Route
          path="/signup"
          element={<Register user={user} />}
        />

        {/* a route to the OTP verification form */}
        <Route
          path="/otp"
          element={<OTP user={user} />}
        />

        {/* a route to create a new password form */}
        <Route
          path="/create-password"
          element={<CreatePassword user={user} />}
        />

        {/* a route to show password changed confirmation */}
        <Route
          path="/password-changed"
          element={<PasswordChanged user={user} />}
        />

        {/* a route to logout */}
        <Route
          path="/logout"
          element={<Logout user={user} setuser={setUser} />}
        />

        {/* Explore page */}
        <Route path="/explore" element={<Explore user={user} navigate={navigate} />} />
        {/* Chat page */}
        <Route path="/chat" element={<Chat user={user} navigate={navigate} />} />
        {/* Settings page */}
        <Route path="/settings" element={<Settings user={user} navigate={navigate} />} />
        {/* ScheduleHub page */}
        <Route path="/schedule" element={<ScheduleHub />} />
      </Routes>
    </>
  )
}

// make this available to other modules as an import
export default App
