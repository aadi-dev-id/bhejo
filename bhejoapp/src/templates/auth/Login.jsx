import React from 'react'
import '../../assets/css/auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
            <h2>Login Form</h2>
            <form>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
            </form>
            <div className="switch">Don't have an account? <Link to="/register" >Register here</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login
