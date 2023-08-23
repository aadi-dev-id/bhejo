import React, { useEffect, useState } from 'react'
import '../../assets/css/convers.css'
import {deleteCookie,apiEndpoint,getCookie} from '../../Common'
import { useNavigate } from 'react-router-dom'
const Conversation = () => { 
    const[jwtoken,setToken] = useState();
    const[contacts,setContacts] = useState([]);
    const[activeContact,setActive] = useState("No Contact found!");
    const[conversation,setConversation] = useState([]);
    const navigate = useNavigate();
    const baseUrl = apiEndpoint();
    const callPage = async ()=>{
        try {
            const apiUrl = baseUrl+"/getConversation";
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
            if(!res.status==200){
                throw new Error(res.error);
            }
            setContacts(data.contacts);
            setConversation(data.conversation);
            setActive(data.fromnum);
        } catch (error) {
            console.log("FETCH ERROR : ",error);
            navigate('/login');
        }
    }
    useEffect(() => {
        callPage();
    }, []);
    const logout = async()=>{
        const rs = await deleteCookie('jwtoken');
        navigate('/login');
    }

  return (
    <div>
      <section className="side-bar-section h-100">
        <div className="side-bar-container h-100">
            <div className="nav-container">
                <div className="left-sidebar">
                    <div className="left-sidebar-body">
                        <h2 className="dashboard-header">Bhejo </h2>
                        <nav className="side-nav">
                            <ul className="menu-list">
                                <li className="menu-item">
                                    <a href="javascript:void(0)" className="menu-item-link">
                                        <span className="menu-item-text">Home</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a onClick={logout} className="menu-item-link">
                                        <span className="menu-item-text">Logout</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="content-with-top">

                    <div className="top-header">
                        <span className="menu-trigger">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                        <div className="user-top-profile">
                            <span className="user-name">Profile</span>
                            <div className="user-img">
                                <img src="" alt=""/>
                            </div>
                            <div className="user-detail-pop-box" style={{ display: 'none' }}>
                                <ul className="top-user-menu">
                                    <li className="top-user-menu-item">
                                        <a href="javascript:0" onClick={logout} className="top-menu-link">
                                            <i className="fa-solid fa-power-off"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                    <li className="top-user-menu-item">
                                        <a href="#" className="top-menu-link">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            <span>Edit Profile</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="Dashboard-content-container p-4">
                          <div className="chat-box-container">
                        <div className="chat-list-container">
                            <div className="chat-list-header">
                                <h2 className="chat-list-heading">Contacts</h2>
                            </div>
                            <div className="chat-list">
                            {contacts.map((item, index) => (
                                <div key={index} className="chat-header">
                                    <div className="chat-user-profile">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="chat-user-name-time">
                                        <h6 className="chat-user-name m-0">{item}</h6>
                                        <span className="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                            ))}
                                
                                
                            </div>
                        </div>
                            <div className="chat-box">
                                <div className="chat-header">
                                    <div className="chat-user-profile">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="chat-user-name-time">
                                        <h6 className="chat-user-name m-0">{activeContact}</h6>
                                        <span className="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                                <div className="chat-body">
                                {conversation.map((item, index) => (
                                    <div key={index} className="chat-inner-content">
                                        
                                        {item.log=='INCOMING' ? (
                                            <div className="incoming-chat-message">
                                                <p className="chat-mess">
                                                    {item.msg}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="outgoing-chat-message">
                                                <p className="chat-mess">
                                                    {item.msg}
                                                </p>
                                            </div>
                                        )}
                                        

                                    </div>
                                ))}
                                    
                                </div>
                                <div className="chat-footer">
                                    <textarea name="" id="" rows="2"></textarea>
                                    <button className="send-btn">
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                          </div>
                        
                    </div>
                    
                </div>
                
               
            </div>
        </div>
    </section>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    
    </div>
  )
}

export default Conversation
