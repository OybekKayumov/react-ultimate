import { useState } from 'react';
import './App.css';

function App() {
  // making three elements here, controlled elements
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');

  return (
    <div>
      <input 
        type="text" 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select 
        value={fromCurrency}
        onChange={e => setFromCurrency(e.target.validationMessage)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={e => setToCurrency(e.target.validationMessage)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}

export default App;
