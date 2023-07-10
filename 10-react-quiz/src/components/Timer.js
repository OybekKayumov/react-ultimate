import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {

  useEffect(function() {
    setInterval(() => {
      dispatch({ type: 'tick'})
    }, 1000);
  }, [dispatch])

  return (
    <div className='timer'>
      {secondsRemaining}
    </div>
  )
}

export default Timer