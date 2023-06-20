import React from 'react'

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open")
  // } else {
  //   alert("Sorry, we're closed")
  // }

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      We're currently open!
    </footer>
  )
}

export default Footer