import './App.css';
import React, { useState } from 'react';
import RandomImage from './RandomImg';
import RandomJoke from './RandomJoke';

// Add two numbers
function add(a, b) {
  return a + b;
}

// Subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CalculatorInput() {

  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const [result, setResult] = useState();

  const handleAdd = () => {
    setResult(add(numberA, numberB));
  };

  const handleSubtract = () => {
    setResult(subtract(numberA, numberB));
  };

  const handleRandom = () => {
    setResult(generateRandomNumber(1, 100));
  };

  // const randomNumber = generateRandomNumber(1, 100);

  return (
    <div className="calculator-container">
      <div className='calcStyle'>
        <label>
          Number A:
          <input type="number" value={numberA} onChange={(e) => setNumberA(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Number B:
          <input type="number" value={numberB} onChange={(e) => setNumberB(Number(e.target.value))} />
        </label>
        <br />
          <button onClick={handleAdd}>+</button>
          <button onClick={handleSubtract}>-</button>
          <button onClick={handleRandom}>Random</button>
        <br />
        <label>Result: {result}</label>
      </div>
        <div ><RandomImage /></div>
        <div><RandomJoke/></div>
    </div>
  );
}

export default CalculatorInput;

