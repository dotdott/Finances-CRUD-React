import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BalanceProvider from './contexts/BalanceContext';
import TransactionsProvider from './contexts/TransactionsContext';

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>

      <BalanceProvider>

        <App />
        
      </BalanceProvider>

    </TransactionsProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

