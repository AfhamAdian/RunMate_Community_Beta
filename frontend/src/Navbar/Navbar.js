import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                        <a href="#home">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Home</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="#friends">
                            <FontAwesomeIcon icon={faUserFriends} />
                            <span>Friends</span>
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href="#profile">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Profile</span>
                        </a>
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="welcome-message">
                Welcome to RunMate
            </div>
        </div>
    );
}

export default Navbar;
