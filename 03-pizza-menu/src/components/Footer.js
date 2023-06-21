import React from 'react'

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open")
  // } else {
  //   alert("Sorry, we're closed")
  // }

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className='footer'>
      {/* if true, than execute next part */}
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHour}:00. Come visit us or order online!
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  )
}

export default Footer