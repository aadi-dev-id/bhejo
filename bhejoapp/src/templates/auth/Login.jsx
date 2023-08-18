import React from 'react'
import '../../assets/css/auth.css'
import homeimage from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const[formerror,setError] = useState(false);
    const submitForm = async (formData)=>{
        const apiUrl = "http://localhost:3000/login";
        axios.post(apiUrl,formData)
        .then(result=>{
            if(result.data?.token){
                console.log("Login Successfull");
            }else{
                setError(result.data?.error);
            }
        }).catch(err=>{console.log(err)})
    }
    const{register,handleSubmit,formState:{errors}} = useForm();
    const loginOption = {
        username : {
            required:'Email is required',
            pattern : {
              value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message : 'Please enter a valid email'
            }
        },
        password : {required:'Password is required',minLength:{value:8,message:'Password should be atleast 8 character'}},
    }
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
                          <span>Please signin to continue.</span><br/>
                          <span className='fieldError'>{formerror}</span>
                      </div>
                      <form onSubmit={handleSubmit(submitForm)} className="signIn-form">
                          <div className="form__group field">
                              <input type="text" className="form__field" {...register("username")} placeholder="Enter Your Email Address" name="username" id='username' required />
                              <label for="username" className="form__label">Email Address</label>
                              <span className='fieldError'>{errors?.username && errors?.username?.message}</span>
                          </div>
                          <div className="forget-text">
                            <span>Forgot</span> <a href="">Username/Password</a>
                          </div>
                          <div className="form__group field">
                              <input type="password" className="form__field" {...register("password")} placeholder="Enter Your Password" name="password" id='password' required />
                              <label for="password" className="form__label">Password</label>
                              <span className='fieldError'>{errors?.password && errors?.password?.message}</span>
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
