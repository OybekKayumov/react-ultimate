import React, { useEffect, useState } from 'react'

const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(function () { 
    // passing callback fn, this process is called lazy evaluation
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(function () {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]) 

  return [value, setValue]
}

export default useLocalStorageState