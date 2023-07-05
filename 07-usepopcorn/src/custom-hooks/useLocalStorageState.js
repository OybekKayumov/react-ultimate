import React, { useEffect, useState } from 'react'

const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(function () { 
    // passing callback fn, this process is called lazy evaluation
    const storedValue = localStorage.getItem(key);

    return JSON.parse(storedValue);
  });

  useEffect(function () {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key]) 

  return [value, setValue]
}

export default useLocalStorageState