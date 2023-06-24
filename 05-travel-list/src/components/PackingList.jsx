import React from 'react';
import { initialItems } from '../data/data';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem }) => { 
  // items come from Form component throw parent App
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

      {/* sorting */}
      <div className='actions'>
        <select name="" id="">
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
      </div>
    </div>
  )
}

export default PackingList