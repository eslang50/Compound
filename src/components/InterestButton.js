import React, {useState} from "react";

export default function InterestButton({ interest }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const buttonStyle = {
    backgroundColor: isSelected ? '#0057DA' : '#EEF0F2',
    color: isSelected ? 'white' : 'black',
  };

  const sign = isSelected ? '-' : '+';

  return (
    <button
      className="interest-button"
      style={buttonStyle}
      onClick={handleClick}
    >
      {interest} {sign}
    </button>
  );
}
