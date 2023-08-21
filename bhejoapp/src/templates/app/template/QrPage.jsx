import React, { useEffect } from 'react'
import '../../../assets/css/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import QrGenerator from '../../../qr/QrGenerator'

const QrPage = () => {
  const navigate = useNavigate();
  let qrId = null;
  const callPage = async ()=>{
    try {
      const res = await fetch('http://localhost:3000/checkLogin',{
        method:"GET",
        headers : {
          Accept : "application/json",
          "Content-Type":"application/json"
        },
        credentials : "include"
      });
      const data = await res.json();
      console.log("Response : ",data);
      if(!res.status==200){
        throw new Error(res.error);
      }
      qrId = res.data?.userId;
    } catch (error) {
      console.log("FETCH ERROR : ",error);
      navigate('/login');
    }
  }
  useEffect(() => {
    callPage();
  }, []);
  const WhatsAppLink = "https://wa.me/916386003550?text=Getting+Started+with+bhejo";
  return (
    <div>
        <section className="onboarding">
        <div className="page-content">
            <div className="onboarding-form-content">
                <div className="form-header">
                    <h5 className="form-heading">Geting Started With Bhejo</h5>
                </div>
                <div className="m-3 text-center">
                    <p>Scan this qr code & start to send message with your WhatsApp App.</p>
                    <QrGenerator link={WhatsAppLink}/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default QrPage
