import React from 'react'
import '../../assets/css/convers.css'
import script from '../../assests/js/script.js'
const Conversation = () => {
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
                                    <a href="" className="menu-item-link">
                                        <span className="menu-item-text">Home</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                </li>
                                
                                <li className="menu-item submenu-toggler">
                                    <a className="menu-item-link">
                                        <span className="menu-item-text">Settings</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <ul className="submenu-list">
                                        <li className="submenu-item">
                                            <a href="" className="submenu-item-link">
                                                <span className="submenu-item-text">Logout</span>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </a>
                                        </li>
                                        
                                    </ul>
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
                            <span className="user-name">Aliza Beth</span>
                            <div className="user-img">
                                <img src="" alt=""/>
                            </div>
                            <div className="user-detail-pop-box" style={{ display: 'none' }}>
                                <ul className="top-user-menu">
                                    <li className="top-user-menu-item">
                                        <a href="" className="top-menu-link">
                                            <i className="fa-solid fa-power-off"></i>
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                    <li className="top-user-menu-item">
                                        <a href="" className="top-menu-link">
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
                                <div className="chat-header">
                                    <div className="chat-user-profile">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="chat-user-name-time">
                                        <h6 className="chat-user-name m-0">Ankita</h6>
                                        <span className="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                                <div className="chat-header">
                                    <div className="chat-user-profile">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="chat-user-name-time">
                                        <h6 className="chat-user-name m-0">Ankita</h6>
                                        <span className="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="chat-box">
                                <div className="chat-header">
                                    <div className="chat-user-profile">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="chat-user-name-time">
                                        <h6 className="chat-user-name m-0">Ankita</h6>
                                        <span className="last-chat">Last Seen 2:05 PM</span>
                                    </div>
                                </div>
                                <div className="chat-body">
                                    <div className="chat-inner-content">
                                        <div className="incoming-chat-message">
                                            <p className="chat-mess">
                                                You can resize the IE Window to your liking b
                                            </p>
                                        </div>

                                        <div className="outgoing-chat-message">
                                            <p className="chat-mess">
                                                You can resize the IE Window to your liking b
                                            </p>
                                        </div>

                                    </div>
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
    <script src={script}></script>
    </div>
  )
}

export default Conversation
