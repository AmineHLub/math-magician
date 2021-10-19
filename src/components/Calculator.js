import React, { Component } from 'react';
import '../App.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-components">
        <Display />
        <Multipliers />
        <Numbers />
      </div>
    );
  }
}

const Display = () => (
  <>
    <div className="Display">
      <p>0</p>
    </div>
  </>
);

const Multipliers = () => (
  <div className="Multipliers-Wrap">
    <button type="button">÷</button>
    <button type="button">x</button>
    <button type="button">-</button>
    <button type="button">+</button>
    <button type="button">=</button>
  </div>
);

const Numbers = () => (
  <div className="Numbers-Wrap">
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button">0</button>
    <button type="button">.</button>
  </div>
);
