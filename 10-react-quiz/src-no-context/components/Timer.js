import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {
  const min = Math.floor(secondsRemaining / 60);
  const second = secondsRemaining % 60;

  useEffect(function() {
    const id = setInterval(() => {
      dispatch({ type: 'tick'})
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch])

  return (
    <div className='timer'>
      {/* {secondsRemaining} */}
      
      {min < 10 && "0"}
      {min}:
      {second < 10 && "0"}
      {second}
    </div>
  )
}

export default Timer