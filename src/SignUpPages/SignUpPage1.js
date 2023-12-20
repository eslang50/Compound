import React from "react";
import Input from '../components/Input'
import Header from '../components/Header';
import Button from '../components/Button';
import { Link } from "react-router-dom";

export default function SignUpPage1() {
  return (
    <div>
      <div class="nav">
        <img src={process.env.PUBLIC_URL + '/star.png'} alt="coin icon" id='coin-icon' />
        <p id='compount-header' >Compound</p>
      </div>
      <div id='display'>
        <img src={process.env.PUBLIC_URL + './CF3.svg'} alt="Crowdfunding person icon" id='purple-cf' />
      <div id='login-container'>
          <Header text="Your start to financial literacy." ></Header>
        <div id="inputContainer">
          <Input label="Email address" placeholder="Enter email address" />
          <Input label="Password" placeholder="Enter password" />
        </div>
          <Link to="./SignUpPages/SignUpPage2" style={{ textDecoration: 'none' }} >
            <Button text="Sign up now" className="sign-up" ></Button>
          </Link>
      </div>
        <div id='cf-container'>
          <img src={process.env.PUBLIC_URL + './CF2.svg'} alt="Crowdfunding person icon" id='red-cf'/>
          <img src={process.env.PUBLIC_URL + './CF1.svg'} alt="Crowdfunding person icon" id='yellow-cf'/>
        </div>
      </div>
    </div>
  )
}