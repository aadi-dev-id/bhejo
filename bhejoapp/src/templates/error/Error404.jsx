import React from 'react'
import '../../assets/css/auth.css'
import 'bootstrap'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
            <h2>404 - Page Not Found!</h2>
            <Link to='/'><button className='btn btn-danger'>Go to Homepage</button></Link>
            <div className="switch">The page you're requested, is not found!</div>
        </div>
      </div>
    </div>
  )
}

export default Error404
