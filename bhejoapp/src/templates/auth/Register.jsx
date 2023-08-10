import React from 'react'
import '../../assets/css/auth.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
            <h2>Registration Form</h2>
            <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
            <label for="username">Email</label>
            <input type="text" id="username" name="username" placeholder="Enter your email" />
            <label for="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Enter your mobile number" />
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
            <button type="submit">Register</button>
            </form>
            <div className="switch">Already have an account? <Link to="/login" >Sign In here</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register
