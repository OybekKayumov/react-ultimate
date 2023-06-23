import React from 'react';
import { initialItems } from '../data/data';
import Item from './Item';

const PackingList = ({ items }) => { 
  // items come from Form component throw parent App
  return (
    <div className='list'>
      <ul>
        {/* {initialItems.map(item => ( */}
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default PackingList