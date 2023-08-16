import React from 'react'
import '../../assets/css/auth.css'
import homeimage from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className="sign-in">
          <div className="container-out d-flex">
              <div className="sign-in-container">
                  <div className="sign-in-body">
                      <div className="logo">
                          <h1>LOGO ICON</h1>
                      </div>
                      <div className="header-text">
                          <h2>Welcome back!</h2>
                          <span>Please signin to continue.</span>
                      </div>
                      <form action="" className="signIn-form">
                          <div className="form__group field">
                              <input type="text" className="form__field" placeholder="Enter Your Email Address" name="email" id='email' required />
                              <label for="name" className="form__label">Email Address</label>
                          </div>
                          <div className="forget-text">
                            <span>Forgot</span> <a href="">Username/Password</a>
                          </div>
                          <div className="form__group field">
                              <input type="password" className="form__field" placeholder="Enter Your Password" name="password" id='password' required />
                              <label for="name" className="form__label">Password</label>
                          </div>
                          <button type="submit" className="form-button">
                              Sign In
                          </button>
                          <div className="divider">
                              <span className="line"></span>
                              <span className="text">OR</span>
                          </div>
                      </form>
                      <Link to={'/register'} className="sign-up-btn text-center form-button">
                          Create a new account!
                      </Link>
                  </div>
              </div>
              <div className="right-image">
                  <img src={homeimage} className="h-100 w-100" alt=""/>
              </div>
          </div>
      </section>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
  </div>
  )
}

export default Login
