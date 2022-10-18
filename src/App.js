
import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import Logo from './components/Logo';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className='react-calculator-container'>
        <Display input={input} />
        <div className='react-calculator-row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='react-calculator-row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='react-calculator-row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='react-calculator-row'>
          <Button clickHandler={calculateResult}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='react-calculator-row'>
          <ButtonClear clearHandler={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
