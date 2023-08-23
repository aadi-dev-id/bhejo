import React, { useEffect, useState } from 'react'
import '../../../assets/css/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import {getCookie,apiEndpoint} from '../../../Common'
import QrGenerator from '../../../qr/QrGenerator'

const QrPage = () => {
  const navigate = useNavigate();
  const[userId,setUserId] = useState("BHEJO");
  const[jwtoken,setToken] = useState();
  const whatsAppBase = "https://wa.me/916386003550?text=";
  const[qrLink,setLink] = useState(null);
  
  const baseUrl = apiEndpoint();
  const callPage = async ()=>{
    try {
      let token = await getCookie("jwtoken");
      setToken(token);
      const res = await fetch(baseUrl+'/checkLogin',{ 
        method:"POST",
        headers : {
          Accept : "application/json",
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
        },
        credentials : "include"
      });
      const data = await res.json();
      if(!data.status==200){
        throw new Error(res.error); 
      }
      setUserId(data?.userId);
      setLink(whatsAppBase+data?.userId);
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
                    {
                      qrLink && <QrGenerator link={qrLink}/>
                    }
                    <small><strong>Note : </strong>Please scan qr code & send an message with your mobile </small>
                    <br/><Link to="/conversation" className='btn btn-warning'>See Conversation</Link>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default QrPage
