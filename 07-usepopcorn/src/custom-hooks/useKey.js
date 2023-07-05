import React, { useEffect } from 'react'


const useKey = (key, action) => {

  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        // handleCloseMovie();
        // onCloseMovie();
        action();
      }
    };

    document.addEventListener('keydown', callback)

    return function () {
      document.removeEventListener('keydown', callback)
    }
  }, [action, key])

  return (
    <div>useKey</div>
  )
}

export default useKey