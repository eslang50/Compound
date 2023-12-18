import React from "react";
import '../styling/header.css';

export default function Header(props) {
  return (
    <div>
      <h3>{props.text}</h3>
    </div>
  );
}
