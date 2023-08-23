import React, { useEffect, useState } from 'react'
import '../../../assets/css/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import {apiEndpoint} from '../../../Common'
import QrGenerator from '../../../qr/QrGenerator'

const QrPage = () => {
  const navigate = useNavigate();
  const[userId,setUserId] = useState();
  const[jwtoken,setToken] = useState();
  const whatsAppBase = "https://wa.me/916386003550?text="+userId;
  const[qrLink,setLink] = useState();
  
  setLink(whatsAppBase+userId);
  const baseUrl = apiEndpoint();
  const callPage = async ()=>{
    try {
      let token = await getCookie("jwtoken");
      setToken(token);
      const res = await fetch(baseUrl+'/checkLogin',{
        method:"GET",
        headers : {
          Accept : "application/json",
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
        },
        credentials : "include"
      });
      const data = await res.json();
      console.log("Response : ",data);
      if(!res.status==200){
        throw new Error(res.error);
      }
      setUserId(res.data?.userId);
    } catch (error) {
      console.log("FETCH ERROR : ",error);
      navigate('/login');
    }
  }
  useEffect(() => {
    callPage();
  }, []);
  
  return (
    <div>
        <section className="onboarding">
        <div className="page-content">
            <div className="onboarding-form-content">
                <div className="form-header">
                    <h5 className="form-heading">Getting Started With Bhejo</h5>
                </div>
                <div className="m-3 text-center">
                    <p>Scan this qr code & start to send message with your WhatsApp App.</p>
                    <QrGenerator link={qrLink}/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default QrPage
