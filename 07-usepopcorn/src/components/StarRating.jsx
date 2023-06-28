import React from 'react'

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}

const starContainerStyle = {
  display: 'flex',
  // alignItems: 'center',
  gap: '4px',
}

const textStyle = {
  lineHeight: '1',
  margin: '0',
}

const StarRating = ({ maxRating }) => {

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => 
          <span>S{i + 1}</span>  // i = 0
        )}
      </div>

      <p style={textStyle}>10</p>
    </div>
  )
}

export default StarRating

// create empty array with 5 elements 
// we not interested in the elements themselves
// (_, i), but we are interested in the number
