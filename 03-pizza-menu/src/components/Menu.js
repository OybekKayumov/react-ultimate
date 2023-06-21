import React from 'react'
import Pizza from './Pizza'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza 
        name='Pizza Spinaci' 
        ingredients='tomato,...'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />

      <Pizza 
        name='Pizza Funghi' 
        ingredients='mushrooms,...'
        photoName='pizzas/funghi.jpg'
        price={12}
      />
    </main>
  )
}

export default Menu;
