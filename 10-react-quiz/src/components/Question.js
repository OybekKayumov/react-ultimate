import React from 'react'

const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className='options'>
        {question.options.map(option => (
          <button className='btn btn-options'>{option}</button>
        ))}
      </div>
    </div>
  )
}

export default Question