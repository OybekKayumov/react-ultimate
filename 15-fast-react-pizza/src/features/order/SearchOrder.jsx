import { useState } from 'react'

const SearchOrder = () => {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // go to /order/{typed}
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Search for order # "
        value={query}
        onChange={e => setQuery(e.target.value)}
        />
    </form>
  )
}

export default SearchOrder