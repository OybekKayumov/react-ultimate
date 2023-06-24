
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
  // from Form component to PackingList component
  const [items, setItems] = useState([]);

  // Calculating Statistics as Derived State
  // const numItems = items.length;

  function handleAddItems(item) {
     setItems(items => [...items, item])  // spread current items and other item
  }

  // Deleting an Item: More Child-to-Parent Communication
  // filter returns new array without id
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => 
      item.id === id 
        ? {...item, packed: !item.packed}
        : item
      )
    )
  }
  
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList 
        items={items} 
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
