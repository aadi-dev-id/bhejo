import React from 'react'
import '../../assets/css/auth.css'
import homeimage from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Register = () => {
  const{register,handleSubmit,formState:{errors}} = useForm();
  const submitForm = async (formData)=>{
     const apiUrl = "http://localhost:3000/register";
     let res = await axios.post(apiUrl,formData);
     console.log(res);
  }
  const validateName = (value)=>{
    value = value.trim();
    return !value?'Invalid Input value':true;
  }
  const validatePassword = (value)=>{
    var pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    if(pattern.test(password.value.trim())){
      return true;
    }else{
      return 'Please Enter valid password';
    }
    
  }
  const registerOption  = {
    firstname : {
      required:'First name is required',
      validate : validateName,
    },
    lastname : {
      required:'Last name is required',
      validate : validateName,
    },
    mobile : {
      required:'Mobile number is required',
    },
    username : {
      required:'Email is required',
      pattern : {
        value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message : 'Please enter a valid email'
      }
    },
    password : {required:'Password is required',validate:validatePassword,minLength:{value:8,message:'Password should be atleast 8 character'}},
    cpassword : {required:'Password is required',validate:validatePassword,minLength:{value:8,message:'Password should be atleast 8 character'}}
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
                          <h2>Create New Account!</h2>
                      </div>
                      <form onSubmit={handleSubmit(submitForm)} className="signIn-form">
                          <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <div className="form__group field">
                                    <input type="text" className="form__field" {...register("firstname",registerOption.firstname)} placeholder="Enter Your first name" name="firstname" id='firstname' />
                                    <label for="firstname" className="form__label">First Name</label>
                                    <span className='fieldError'>{errors?.firstname && errors?.firstname?.message}</span>
                                </div>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                              <div className="form__group field">
                                  <input type="text" className="form__field" {...register("lastname",registerOption.lastname)} placeholder="Enter Your Password" name="lastname" id='lastname' />
                                  <label for="lastname" className="form__label">Last Name</label>
                                  <span className='fieldError'>{errors?.lastname && errors?.lastname?.message}</span>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <div className="form__group field">
                                    <input type="text" className="form__field" {...register("username",registerOption.username)} placeholder="Enter Your Email Address" name="username" id='username'  />
                                    <label for="username" className="form__label">Email Address</label>
                                    <span className='fieldError'>{errors?.username && errors?.username?.message}</span>
                                </div>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                              <div className="form__group field">
                                  <input type="text" className="form__field" {...register("mobile",registerOption.mobile)} placeholder="Enter Your Mobile no" name="mobile" id='mobile' />
                                  <label for="mobile" className="form__label">Mobile</label>
                                  <span className='fieldError'>{errors?.mobile && errors?.mobile?.message}</span>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <div className="form__group field">
                                    <input type="password" className="form__field" {...register("password",registerOption.password)} placeholder="Enter Your Email Address" name="password" id='password' />
                                    <label for="password" className="form__label">Password</label>
                                    <span className='fieldError'>{errors?.password && errors?.password?.message}</span>
                                </div>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                              <div className="form__group field">
                                  <input type="password" className="form__field" {...register("cpassword",registerOption.cpassword)} placeholder="Re-Enter Your Password" name="cpassword" id='cpassword' />
                                  <label for="cpassword" className="form__label">Confirm Password</label>
                                  <span className='fieldError'>{errors?.cpassword && errors?.cpassword?.message}</span>
                              </div>
                            </div>
                          </div>
                          
                            <button type="submit" className="form-button">
                                Submit
                            </button>
                            <div className="divider">
                                <span className="line"></span>
                                <span className="text">OR</span>
                            </div>
                      </form>
                      <Link to={'/'} className="sign-up-btn text-center form-button">
                          Already have an account? Sign In
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

export default Register
