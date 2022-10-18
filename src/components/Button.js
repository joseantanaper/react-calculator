import React from 'react';
import '../style/Button.css';

function Button(props) {

  const isOperator = val => {
    return isNaN(val) && (val !== '.') && (val !== '=');
  };

  return (
    <div
      className={`react-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;