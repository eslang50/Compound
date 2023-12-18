import React from 'react';
import '../styling/input.css'

export default function Input(props) {
  return (
    <div id="input-container">
      <label for="input">{props.label}</label>
      <input type="text" id="input" placeholder={props.placeholder}></input>
    </div>
  );
}

