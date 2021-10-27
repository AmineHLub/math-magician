import React, { useState } from 'react';
import '../styles/calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});

  const handleEvent = (val) => {
    setState((prevState) => calculate(prevState, val));
  };

  const {
    next, operation, total,
  } = state;
  return (
    <>
      <div className="calculator-components">
        <div className="Display">
          <p>{next || operation || total || '0'}</p>
        </div>
        <div className="Multipliers-Wrap">
          <button type="button" onClick={() => handleEvent('÷')}>÷</button>
          <button type="button" onClick={() => handleEvent('x')}>x</button>
          <button type="button" onClick={() => handleEvent('-')}>-</button>
          <button type="button" onClick={() => handleEvent('+')}>+</button>
          <button type="button" onClick={() => handleEvent('=')}>=</button>
        </div>
        <div className="Numbers-Wrap">
          <button type="button" onClick={() => handleEvent('AC')}>AC</button>
          <button type="button" onClick={() => handleEvent('+/-')}>+/-</button>
          <button type="button" onClick={() => handleEvent('%')}>%</button>
          <button type="button" onClick={() => handleEvent('7')}>7</button>
          <button type="button" onClick={() => handleEvent('8')}>8</button>
          <button type="button" onClick={() => handleEvent('9')}>9</button>
          <button type="button" onClick={() => handleEvent('4')}>4</button>
          <button type="button" onClick={() => handleEvent('5')}>5</button>
          <button type="button" onClick={() => handleEvent('6')}>6</button>
          <button type="button" onClick={() => handleEvent('1')}>1</button>
          <button type="button" onClick={() => handleEvent('2')}>2</button>
          <button type="button" onClick={() => handleEvent('3')}>3</button>
          <button type="button" onClick={() => handleEvent('0')}>0</button>
          <button type="button" onClick={() => handleEvent('.')}>.</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
