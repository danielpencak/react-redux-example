import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
