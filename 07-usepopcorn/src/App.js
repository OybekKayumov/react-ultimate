import { useEffect, useState } from "react";
import StarRating from "./components/StarRating";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [query, setQuery] = useState("interstellar");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null)
  
  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie])
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

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
    handleCloseMovie();

    fetchMovies();

    // we want to cancel the current request each time that a new one comes in
    return function () {
      controller.abort();
    }
  }, [query]) // dependency array 
  
  return (
    <>
      <NavBar>
        {/* children */}
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      
      <Main>
        <Box>
          { isLoading && <Loader />}
          
          { !isLoading && !error && 
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} 
          />}
          
          { error && <ErrorMessage message={error} />}
        </Box>
         
        <Box>
          { selectedId 
            ? (
              <MovieDetails 
                selectedId={selectedId} 
                onCloseMovie={handleCloseMovie}
                onAddWatched={handleAddWatched}
                watched={watched}
              />
            ) : ( 
              <>
                <WatchedSummary watched={watched} />
                <WatchedMovieList 
                  watched={watched}
                  onDeleteWatched={handleDeleteWatched}
                />
              </>
          )} 
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return(
    <p className="loader">Loading...</p>
  )
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  )
}

// function NavBar({ movies }) {
function NavBar({ children }) {

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  ) 
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  )
}

function Search({ query, setQuery }) {
  // const [query, setQuery] = useState("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  )
}

// function Main({ movies }) {
function Main({ children }) {
  
  return (
    <main className="main">
      {children}
    </main>
  )
}


function Box({ children }) {
// function Box({ element }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}      
    </div>
  )
}

function MovieList({ movies, onSelectMovie }) {
  
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie 
          movie={movie} 
          key={movie.imdbID} 
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  )
}

function Movie({ movie, onSelectMovie }) {
  return (
    // <li key={movie.imdbID}>
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);
  
  // optional chaining, if returns nothing in the movie list --> selectedId)?.
  const watchedUserRating = watched.find(
    movie => movie.imdbID === selectedId
  )?.userRating;

  // destructure new movie object
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // The Rules of Hooks in Practice
  /* eslint-disable */
  // if (imdbRating > 8 ) [isTop, setIsTop] = useState(true);
  
  // if (imdbRating > 8) return <p>Greatest ever!</p>
  
  // More Details of useState
  /*
  const [isTop, setIsTop] = useState(imdbRating > 8 ); // undefined --> false
  console.log(': ', isTop ); 

  useEffect(function () {
    setIsTop(imdbRating > 8);
  }, [imdbRating])  // true
  */
  const isTop = imdbRating > 8;
  console.log('isTop: ', isTop);

  const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating
    }

    onAddWatched(newWatchedMovie);
    // onCloseMovie();

    setAvgRating(Number(imdbRating));
    // alert(avgRating);
    setAvgRating((avgRating) => (avgRating + userRating) / 2)
  }

   // quit movie by esc
   useEffect(() => {
    function callback(e) {
      if (e.code === 'Escape') {
        // handleCloseMovie();
        onCloseMovie();
        console.log('Closing...');
      }
    };

    document.addEventListener('keydown', callback)

    return function () {
      document.removeEventListener('keydown', callback)
    }
  }, [onCloseMovie])

  useEffect(() => {
    async function getMoviesDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      // console.log('data: ', data);
      setMovie(data);
      setIsLoading(false);
    }

    getMoviesDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;

    document.title = `Movie | ${title}`;

    // Cleaning Up the Title
    return function () {
      document.title = 'usePopcorn'
      console.log(`Cleaning Up the Title: ', ${title}`); //! remembers title
      // closure - means that a function will always remember all the variables that were present at the time and the place data function was created
    }
  // }, [])     // on first mount, undefined
  }, [title])   // on change tittle this effect is executed again 
  

  return (
    <div className="details">
      { isLoading ? (
        <Loader /> 
      ) : ( 
        <>
          <header>
            <button 
              className="btn-back"
              onClick={onCloseMovie}
              >
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{released} &bull; {runtime}</p>
              <p>{genre}</p>
              <p><span>⭐</span>{imdbRating} IMDb Rating</p>
            </div>
          </header>

          <h2>{avgRating}</h2>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating 
                    maxRating={10} 
                    size={24} 
                    onSetRating={setUserRating}
                  />

                  { userRating > 0 && (
                    <button 
                      className="btn-add"
                      onClick={handleAdd}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating} 
                  <span>🌟</span>
                </p>
              )}
            </div>
            <p><em>{plot}</em></p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  )
}

function WatchedSummary({ watched } ) {
  //derived from "watched" states:
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}

function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie 
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  )
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    // <li key={movie.imdbID}>
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button 
          className="btn-delete" 
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  )
}
