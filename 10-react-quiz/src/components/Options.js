import React from 'react'

const Options = ({ question }) => {
  return (
    <div className='options'>
      {question.options.map(option => (
        <button 
          className='btn btn-options'
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Options