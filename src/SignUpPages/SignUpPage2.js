import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function SignUpPage2() {
  return (
    <div>
      <div class="progress-nav">
        <div class="progress-bar">
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon1.svg'} alt="" id="register" />
            <h4>Register</h4>
          </div>
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon2.svg'} alt="" id="add-info" />
            <h4 id="heading-two" >Add Your Financial Info</h4>
          </div>
          <div class="progess">
            <img src={process.env.PUBLIC_URL + '/CAIcon3.svg'} alt="" id="earn-badge" />
            <h4>Earn Your Badge!</h4>
          </div>
        </div>
      </div>
        <Header text="Tell us a little more about your financial personality" /> 
      <div id="financial-container">
        <div id="financial-container-one">
          <div id="financial-info">
            <img src={process.env.PUBLIC_URL + '/button1.svg'} alt="" />
            <h4>Financial Info</h4>
          </div>
          <div id="incomeStatus">
              <label for="select-dropdown">Income</label>
              <select name="income" id="select-dropdown">
                <option value="" hidden>Select</option>
                <option value="">0 - 20000</option>
                <option value="">20000 - 50000</option>
                <option value="">50000 - 100000</option>
                <option value="">100000+</option>
              </select>
              <div id="status">
                <h4>Relationship Status</h4>
                <div class="status-option">
                  <input type="radio" id="single" name="status" />
                  <label for="single">Single</label> 
                </div>
                <div class="status-option">
                  <input type="radio" id="married-one" name="status" />
                  <label for="married-one">Married, filing taxes together</label>
                </div>
                <div class="status-option">
                  <input type="radio" id="married-two" name="status" />
                  <label for="married-two">Married, filing taxes separately</label>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div id="financial-interest">
            <img src={process.env.PUBLIC_URL + '/button2.svg'} alt="" />
            <h4>My Financial Interests</h4>
          </div>
          <div id="interests">
            <button class="interest-button">Budgeting -</button>
            <button class="interest-button">Investing +</button>
            <button class="interest-button">Credit Management +</button>
            <button class="interest-button">Debt Management +</button>
            <button class="interest-button">Retirement Planning +</button>
            <button class="interest-button">Tax Planning +</button>
            <button class="interest-button">Goal Setting +</button>
            <button class="interest-button">Estate Planning +</button>
          </div>
        </div>
      </div>
      <Link to={'../../SignUpPages/SignUpPage3'} style={{ textDecoration: 'none' }} >
        <button id="next-button">Next</button> 
      </Link>
    </div>
  );
}