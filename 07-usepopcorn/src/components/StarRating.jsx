import React from 'react'

const StarRating = () => {
  return (
    <div>
      <div>

        {Array.from({ length: 5}, (_, i) => 
          <span>S{i + 1}</span>  // i = 0
        )}
      </div>

      <p>10</p>
    </div>
  )
}

export default StarRating

// create empty array with 5 elements 
// we not interested in the elements themselves
// (_, i), but we are interested in the number
