import React from 'react';
import { initialItems } from '../data/data';
import Item from './Item';

const PackingList = () => {
  return (
    <div className='list'>
      <ul>
        {initialItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default PackingList