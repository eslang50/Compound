import React from "react";
import Header from "../components/Header";

export default function SignUpPage3() {
  return (
    <div>
      <div class="progress-nav">
        <div class="progress-bar">
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon1.svg'} alt="" id="register" />
            <h4>Register</h4>
          </div>
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon2V2.svg'} alt="" id="add-info" />
            <h4 >Add Your Financial Info</h4>
          </div>
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon3.svg'} alt="" id="earn-badge" />
            <h4 id="heading-two" >Earn Your Badge!</h4>
          </div>
        </div>
      </div>
      <div id="welcome-container" >
        <Header text="Welcome to Compound!"></Header>
        <p id="paragraph-one" >Congrats on finishing your onboarding! As a reward, you've earned your first badge: Profile Perfection!</p>
        <div id="picture-container">
          <img src={process.env.PUBLIC_URL + '/left-green-wing.svg'} alt="" />
          <img src={process.env.PUBLIC_URL + '/purple-coin.svg'} alt="" />
          <img src={process.env.PUBLIC_URL + '/left-green-wing.svg'} alt="" id="right-wing" />
        </div>
        <p id="paragraph-two">You've earned it for taking the first step towards financial empowerment. We're here to support you every step of the way. Start exploring more features to continue your financial journey!</p>
        <button id="dashboard-button" >Go to Dashboard</button>
      </div>
    </div>
  )
}