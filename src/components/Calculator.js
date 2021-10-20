import React, { Component } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleEvent(val) {
    this.setState((prevState) => calculate(prevState, val));
  }

  render() {
    const { next, operation, total } = this.state;
    return (
      <>
        <div className="calculator-components">
          <div className="Display">
            <p>{next || operation || total || '0'}</p>
          </div>
          <div className="Multipliers-Wrap">
            <button type="button" onClick={() => this.handleEvent('÷')}>÷</button>
            <button type="button" onClick={() => this.handleEvent('x')}>x</button>
            <button type="button" onClick={() => this.handleEvent('-')}>-</button>
            <button type="button" onClick={() => this.handleEvent('+')}>+</button>
            <button type="button" onClick={() => this.handleEvent('=')}>=</button>
          </div>
          <div className="Numbers-Wrap">
            <button type="button" onClick={() => this.handleEvent('AC')}>AC</button>
            <button type="button" onClick={() => this.handleEvent('+/-')}>+/-</button>
            <button type="button" onClick={() => this.handleEvent('%')}>%</button>
            <button type="button" onClick={() => this.handleEvent('7')}>7</button>
            <button type="button" onClick={() => this.handleEvent('8')}>8</button>
            <button type="button" onClick={() => this.handleEvent('9')}>9</button>
            <button type="button" onClick={() => this.handleEvent('4')}>4</button>
            <button type="button" onClick={() => this.handleEvent('5')}>5</button>
            <button type="button" onClick={() => this.handleEvent('6')}>6</button>
            <button type="button" onClick={() => this.handleEvent('1')}>1</button>
            <button type="button" onClick={() => this.handleEvent('2')}>2</button>
            <button type="button" onClick={() => this.handleEvent('3')}>3</button>
            <button type="button" onClick={() => this.handleEvent('0')}>0</button>
            <button type="button" onClick={() => this.handleEvent('.')}>.</button>
          </div>
        </div>
      </>
    );
  }
}
