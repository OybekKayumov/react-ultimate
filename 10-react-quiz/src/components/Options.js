import React from 'react'

const Options = ({ question, dispatch, answer }) => {
  return (
    <div className='options'>
      {question.options.map((option, ind) => (
        <button 
          className='btn btn-options'
          key={option}
          onClick={() =dispatch({type: 'newAnswer', payload: ind})}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Options