import React from 'react';

import logo from './logo.svg';
// import lisbon from './../public/lisbon.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="photos/lisbon.jpg" alt="Lisbon" />
        <img src="https://source.unsplash.com/random" alt="Something" />
        <p>Hello world!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
