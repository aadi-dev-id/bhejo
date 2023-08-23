import React from 'react'
import '../../assets/css/style.css'
import '../../assets/js/script.js'
importScripts('../../assets/js/script.js')
const Conversation = () => {
  return (
    <div>
      <section classname="side-bar-section h-100">
        <div classname="side-bar-container h-100">
            <div classname="nav-container">
                <div classname="left-sidebar">
                    <div classname="left-sidebar-body">
                        <h2 classname="dashboard-header">Bhejo </h2>
                        <nav classname="side-nav">
                            <ul classname="menu-list">
                                <li classname="menu-item">
                                    <a href="" classname="menu-item-link">
                                        <span classname="menu-item-text">Home</span>
                                        <i classname="fa-solid fa-chevron-right"></i>
                                    </a>
                                </li>
                                
                                <li classname="menu-item submenu-toggler">
                                    <a classname="menu-item-link">
                                        <span classname="menu-item-text">Settings</span>
                                        <i classname="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <ul classname="submenu-list">
                                        <li classname="submenu-item">
                                            <a href="" classname="submenu-item-link">
                                                <span classname="submenu-item-text">Logout</span>
                                                <i classname="fa-solid fa-chevron-right"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </li>
                                
                                
                            </ul>
                        </nav>
                    </div>
                </div>
                <div classname="content-with-top">

                    <div classname="top-header">
                        <span classname="menu-trigger">
                            <i classname="fa-solid fa-bars"></i>
                        </span>
                        <div classname="user-top-profile">
                            <span classname="user-name">Aliza Beth</span>
                            <div classname="user-img">
                                <img src="" alt=""/>
                            </div>
                            <div classname="user-detail-pop-box" style={{ display: 'none' }}>
                                <ul classname="top-user-menu">
                                    <li classname="top-user-menu-item">
                                        <a href="" classname="top-menu-link">
                                            <i classname="fa-solid fa-power-off"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                    <li classname="top-user-menu-item">
                                        <a href="" classname="top-menu-link">
                                            <i classname="fa-solid fa-pen-to-square"></i>
                                            <span>Edit Profile</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div classname="Dashboard-content-container p-4">
                          <div classname="chat-box-container">
                        <div classname="chat-list-container">
                            <div classname="chat-list-header">
                                <h2 classname="chat-list-heading">Contacts</h2>
                            </div>
                            <div classname="chat-list">
                                <div classname="chat-header">
                                    <div classname="chat-user-profile">
                                        <img src="" alt="" />
                                    </div>
                                    <div classname="chat-user-name-time">
                                        <h6 classname="chat-user-name m-0">Ankita</h6>
                                        <span classname="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                                <div classname="chat-header">
                                    <div classname="chat-user-profile">
                                        <img src="" alt="" />
                                    </div>
                                    <div classname="chat-user-name-time">
                                        <h6 classname="chat-user-name m-0">Ankita</h6>
                                        <span classname="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div classname="chat-box">
                                <div classname="chat-header">
                                    <div classname="chat-user-profile">
                                        <img src="" alt=""/>
                                    </div>
                                    <div classname="chat-user-name-time">
                                        <h6 classname="chat-user-name m-0">Ankita</h6>
                                        <span classname="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                                <div classname="chat-body">
                                    <div classname="chat-inner-content">
                                        <div classname="incoming-chat-message">
                                            <p classname="chat-mess">
                                                You can resize the IE Window to your liking b
                                            </p>
                                        </div>

                                        <div classname="outgoing-chat-message">
                                            <p classname="chat-mess">
                                                You can resize the IE Window to your liking b
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div classname="chat-footer">
                                    <textarea name="" id="" rows="2"></textarea>
                                    <button classname="send-btn">
                                        <i classname="fa-solid fa-paper-plane"></i>
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
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    </div>
  )
}

export default Conversation
