import React, { useState } from 'react';

function Calculator() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (selectedOperator) => {
      setOperator(selectedOperator);
    };
  
    const handleCalculate = () => {
      if (number1 !== '' && number2 !== '') {
        switch (operator) {
          case '+':
            setResult(Number(number1) + Number(number2));
            break;
          case '-':
            setResult(Number(number1) - Number(number2));
            break;
          case '*':
            setResult(Number(number1) * Number(number2));
            break;
          case '/':
            setResult(Number(number1) / Number(number2));
            break;
          default:
            console.error('Invalid operator');
            setResult('');
        }
      } else {
        console.error('Invalid numbers');
        setResult('');
      }
    };

  return (
    <div className='calculator-container'>
        <div className='calcStyle'>
            <label>
                Number A:
                <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
            </label>
            <label>
                Number B:
                <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />
            </label>
            <div>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <button onClick={handleCalculate}>Calculate</button>
            <label>{result && <p>Result: {result}</p>}</label>
        </div>
    </div>
  );
}

export default Calculator;
