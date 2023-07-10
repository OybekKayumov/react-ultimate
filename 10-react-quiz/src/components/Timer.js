import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {

  useEffect(function() {
    const id = setInterval(() => {
      dispatch({ type: 'tick'})
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch])

  return (
    <div className='timer'>
      {secondsRemaining}
    </div>
  )
}

export default Timer