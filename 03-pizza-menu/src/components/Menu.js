import React from 'react'
import Pizza from './Pizza'
import {pizzaData} from './../data/data';

const Menu = () => {
  // const pizzas = pizzaData;
  const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      { pizzas && (
        <ul className='pizzas'>
        {/* {pizzaData.map(pizza => <Pizza name={pizza.name}/>)} */}
        {/* {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)} */}
        {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
      </ul>
      )}

      {/*
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
      */}
    </main>
  )
}

export default Menu;
