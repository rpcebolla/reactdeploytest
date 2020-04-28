import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          No sé, Manoli, me siento extraña.
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Qué te pasa, miarma? ¿Quieres aprender React?
        </a>
      </header>
    </div>
  );
}

export default App;
