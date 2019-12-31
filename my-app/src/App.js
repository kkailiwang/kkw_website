import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  document.title = "Keri Kaili Wang";
  return (
    <div className="App">
      <Navbar color="white">
        <div className="top-bar">
          <a href="#">
            <img src={logo} width="30" height="30" />
            Keri Kaili Wang
          </a>
        </div>
      </Navbar>
      {/* <header className="App-header">
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
        </a> 
      </header> */}
      <body>
        <div className="center-block">
          <p className="title">Hey y'all!</p>
          <p className="blurb">
            My name is Kaili! I'm a sophomore at Stanford University studying
            computer science and product design.
          </p>
        </div>
      </body>
      {/*
      you can add another component/function by just doing <New_Component/>, 
      just like how index.js used <App/>
      */}
    </div>
  );
}

export default App;
