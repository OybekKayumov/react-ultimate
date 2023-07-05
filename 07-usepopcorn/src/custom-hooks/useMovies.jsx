import React, { useEffect, useState } from 'react'
const KEY = process.env.REACT_APP_API_KEY;

const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    // abort controller - to make 1 request while typing - browser API
    const controller = new AbortController() 

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {signal: controller.signal}
        );

        // Handling Errors
        if (!res.ok) throw new Error('Something went wrong with fetching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error("Movie not found")

        setMovies(data.Search);
        setError('');
        
      } catch (err) {
        
        // ignore abort-error
        if (err.name !== "AbortError") {
          console.log('error: ', err.message);
          setError(err.message);
        }

        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    // close movie before new search-fetch
    // handleCloseMovie();

    fetchMovies();

    // we want to cancel the current request each time that a new one comes in
    return function () {
      controller.abort();
    }
  }, [query]) // dependency array 

  return { movies, isLoading, error }
}

export default useMovies