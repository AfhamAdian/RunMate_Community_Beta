import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {

    return (<div className="login-page">
        <div className="runMate">
            <div className="runMateText">
                RunMate
            </div>
            <div className="title">
                RunMate helps you connect and share <br></br> with the people in your life.
            </div>

        </div>
        <div className="login-container">
            <div className="login-detail">
                <input type="email" placeholder="Email address or phone number"></input>
                <br></br>
                <input type="password" placeholder="Password"></input>
                <br></br>
                <button className="login-button">
                <a href="http://localhost:3000/Navbar" className="login-link">Log in</a>
                </button>
            </div>
            <div className="forgot-password">
                <a href="foget">Forgotten password?</a>
                <br></br>
            </div>
            <div className="create-account">
                <button className="create-btn">
                    Create new account
                </button>
            </div>
            <p></p>
            <br></br>
            <div className="page">
                <a href="createpage">Create a Page</a> for a celebrity,brand or business.
            </div>
        </div>
    </div>);

}
export default LoginPage;
