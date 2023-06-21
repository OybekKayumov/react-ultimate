import React from 'react'
import Pizza from './Pizza'
import {pizzaData} from './../data/data';

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {/*  
      { numPizzas > 0 && (
        <ul className='pizzas'>
        {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
      </ul>
      )}
      */}
      { numPizzas > 0 ? (
        <ul className='pizzas'>
        {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
      </ul>
      ) : (
        null
      )}

    </main>
  )
}

export default Menu;


{/* {pizzaData.map(pizza => <Pizza name={pizza.name}/>)} */}
{/* {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)} */}

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
