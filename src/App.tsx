import React from 'react';
import './App.css';
// Components
import Balance from './components/Balance';
import Transaction from './components/Transaction';



function App() {


  return (
    <div className="App">
      <header>
        <img src='./assets/logo.svg' alt="logo"/>
      </header>

      <main className="container">
        <Balance />
      </main>      
      
        <Transaction /> 

      <footer>
        <p>dev.finance$</p>
      </footer>
    </div>
  );
}

export default App;
