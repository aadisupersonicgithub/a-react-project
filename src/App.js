import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <p>A simple calculator built with React</p>
      </header>
      <main className="App-main">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
