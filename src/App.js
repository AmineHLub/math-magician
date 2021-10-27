/* eslint-disable no-unused-vars */
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalculatorComponent from './components/CalculatorComponent';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/calculator">
          <CalculatorComponent />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
