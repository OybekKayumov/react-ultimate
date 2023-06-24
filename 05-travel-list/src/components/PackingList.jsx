import React, { useState } from 'react';
import { initialItems } from '../data/data';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem }) => { 
  // items come from Form component throw parent App

  // add state, 3 steps
  /* 1 */
  const [sortBy, setSortBy] = useState('input');

  // derived state, not create a new state
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;

  return (
    <div className='list'>
      <ul>
        {/* {initialItems.map(item => ( */}
        {items.map(item => (
          <Item 
            item={item} 
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      {/* Sorting Items */}
      <div className='actions'>
        <select
          name="" id="" 
          value={sortBy} /* 2 */
          onChange={e => setSortBy(e.target.value)} /* 3 */
        > 
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
      </div>
    </div>
  )
}

export default PackingList