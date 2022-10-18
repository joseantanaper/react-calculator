import React from 'react';
import '../style/ButtonClear.css';

const ButtonClear = (props) => (
  <div
    className='react-clear'
    onClick={() => props.clearHandler()}
  >
    {props.children}
  </div>
);

export default ButtonClear;