import React from 'react'
import { useState } from 'react';

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  // save object
  // const [items, setItems] = useState([]);
  // function handleAddItems(item) {
    // it will be current items array plus the new item added to the end
    // we cannot do like:
    // setItems(items => items.push(item)) //! mutating - not allowed in React
    //  setItems(items => [...items, item])  // spread current items and other item
  // }

  function handleSubmit(e) {
    e.preventDefault();

    // if no data entered for description, do not create newItem object
    if (!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()};

    console.log('newItem Object: ', newItem);
    // save item
    // handleAddItems(newItem);
    onAddItems(newItem);

    // setter fns to empty inputs
    setDescription('');
    setQuantity(1);

    //! send data from Form to PackingList - state between siblings
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20}, (_, i) => i+1).map(
          num => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input 
        type="text" 
        placeholder='Item...' 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default Form