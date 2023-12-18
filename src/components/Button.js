import React from "react";
import '../styling/button.css';

export default function Button(props) {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  );
}