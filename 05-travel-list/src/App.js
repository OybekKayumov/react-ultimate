
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items}/>
      <Stats />
    </div>
  );
}

export default App;
