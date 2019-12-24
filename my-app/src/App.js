import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="center-block">
          <p className="title">
            Hey y'all! 
          </p>
          <p className="blurb">
            My name is Kaili! I'm a sophomore 
            at Stanford University studying 
            computer science and product design.
          </p>
        </div>
        
      </header>
    </div>
  );
}

export default App;
