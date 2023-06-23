import React from 'react';
import { initialItems } from '../data/data';
import Item from './Item';
import { on } from 'events';

const PackingList = ({ items, onDeleteItem }) => { 
  // items come from Form component throw parent App
  return (
    <div className='list'>
      <ul>
        {/* {initialItems.map(item => ( */}
        {items.map(item => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default PackingList