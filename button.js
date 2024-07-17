import React from 'react';

function Button(props) {
  const { text, handleClick } = props; // Destructuring props

  return (
    <button onClick={handleClick}>{text}</button>
  );
}

export default Button;
