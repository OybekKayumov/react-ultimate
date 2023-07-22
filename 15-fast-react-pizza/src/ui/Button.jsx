/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Button = ({ children, disabled, to, type, onClick }) => {
  // const className = 
  //   "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"

  const base = "text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
  
  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: "text-sm border-2 border-stone-300 uppercase font-semibold text-stone-500 inline-block tracking-wide rounded-full hover:bg-stone-400 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5 hover:text-stone-700 focus:text-stone-800",
  }

  if (to) {
    return <Link to={to} className={styles[type]}>{children}</Link>
  }

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
      >
        {children}
      </button>
    );
  
  return (
    <button
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  )
}

export default Button