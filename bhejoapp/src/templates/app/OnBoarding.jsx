import React, { useEffect } from 'react'
import '../../assets/css/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import {getCookie,apiEndpoint} from '../../Common'

const OnBoarding = () => {
  const[jwtoken,setToken] = useState()
  const navigate = useNavigate();
  const baseUrl = apiEndpoint();
  const callPage = async ()=>{
    try {
      const apiUrl = baseUrl+"/checkLogin";
      let token = await getCookie("jwtoken");
      setToken(token);
      const res = await fetch(apiUrl,{ 
        method:"POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        credentials : "include"
      });
      const data = await res.json();
      console.log("Response : ",data);
      if(!res.status==200){
        throw new Error(res.error);
      }
    } catch (error) {
      console.log("FETCH ERROR : ",error);
      navigate('/login');
    }
  }
  useEffect(() => {
    callPage();
  }, []);
  const[formError,setError] = useState();
  const{register,handleSubmit} = useForm();
  const submitForm = async (formData)=>{
    const apiUrl = baseUrl+"/onboarding"; 
        axios.post(apiUrl,formData,{withCredentials: true,headers:{'Authorization': `Bearer ${jwtoken}`}})
        .then(result=>{
            navigate('/get-started');
        }).catch((err)=>{
            if(err.response){
                setError(err.response.data.error);
            }else if(err.request){
                console.error('Request Error:', err.request);
                setError("Something goes wrong! Try later!");
            }else{
                console.error('Request Setup Error:', err.message);
                setError("Request Setup Error");
            }
        })
  }
  return (
    <div>
        <section className="onboarding">
        <div className="page-content">
            <div className="onboarding-form-content">
                <div className="form-header">
                    <h5 className="form-heading">Onboarding Page</h5>
                </div>
                <form onSubmit={handleSubmit(submitForm)} methond="post">
                    <span className="tag-line">Let us know more about you!</span>
                    <div className="form-group">
                        <label htmlFor="form-label">Company Name</label>
                        <input type="text" {...register("companyName")} name="companName" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-label">Company Type</label>
                        <input type="text" {...register("companyType")} className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-label">You are:</label>
                        <select defaultValue="" className="form-select" {...register("user_is")} aria-label="Default select example" required>
                            <option value="">Select Role - </option>
                            <option value="Business">Business</option>
                            <option value="Developer">Developer</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="form-button" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default OnBoarding
