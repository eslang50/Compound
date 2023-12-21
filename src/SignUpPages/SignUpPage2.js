import React, {useState} from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import InterestButton from "../components/InterestButton";

export default function SignUpPage2() {

  const interests = [
    'Budgeting',
    'Investing',
    'Credit Management',
    'Debt Management',
    'Retirement Planning',
    'Tax Planning',
    'Goal Setting',
    'Estate Planning'
  ]

  return (
    <div>
      <div class="progress-nav">
        <div class="progress-bar">
          <div class="progess">
            <Link to={'../'} >
              <img src={process.env.PUBLIC_URL + '/CAIcon1.svg'} alt="" id="register" />
              <h4>Register</h4>
            </Link>
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
            {interests.map((interest) => (
              <InterestButton interest={interest} />
            ))}
          </div>
        </div>
      </div>
      <Link to={'../../SignUpPages/SignUpPage3'} style={{ textDecoration: 'none' }} >
        <button id="next-button">Next</button> 
      </Link>
    </div>
  );
}