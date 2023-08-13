import React from 'react'
import '../../assets/css/auth.css'
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
    name : {
      required:'Name is required',
      validate : validateName,
    },
    email : {
      required:'Email is required',
      pattern : {
        value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message : 'Please enter a valid email'
      }
    },
    password : {required:'Password is required',validate:validatePassword,minLength:{value:8,message:'Password should be atleast 8 character'}}
  }
  return (
    <div>
      <div className="container">
        <div className="card">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(submitForm)} method='post'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" {...register("name",registerOption.name)} placeholder="Enter your name" />
            {errors?.name && <p className='text-danger' role="alert">{errors?.name?.message}</p>}
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" {...register("username",registerOption.email)} placeholder="Enter your email" />
            {errors?.username && <p className='text-danger' role="alert">{errors?.username?.message}</p>}
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" {...register("mobile")} placeholder="Enter your mobile number" />
            {errors?.mobile && <p className='text-danger' role="alert">{errors?.mobile?.message}</p>}
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password",registerOption.password)} placeholder="Enter your password" />
            {errors?.password && <p className='text-danger' role="alert">{errors?.password?.message}</p>}
            <br/>
            <button type="submit">Register</button>
            </form>
            <div className="switch">Already have an account? <Link to="/login" >Sign In here</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register
