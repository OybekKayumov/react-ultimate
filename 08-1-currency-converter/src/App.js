import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // making three elements here, controlled elements
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function convert() {
      // loading
      setIsLoading(true);

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)

      const data = await res.json();
      console.log('data: ', data);
      console.log('data: ', data.rates[toCurrency]);

      setConverted(data.rates[toCurrency])
      setIsLoading(false)
    }

    // check currencies
    if (fromCurrency === toCurrency) return setConverted(amount);

    convert();
  // }, [])  // on mount
  }, [amount, toCurrency, fromCurrency])  // on change

  return (
    <div>
      <input 
        type="text" 
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      
      <select 
        value={fromCurrency}
        onChange={e => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCurrency}
        onChange={e => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>{converted} {toCurrency}</p>
    </div>
  );
}

export default App;
