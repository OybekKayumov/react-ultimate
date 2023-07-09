import React from 'react'

const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  // not to show Next btn after last question
  if (index < numQuestions -1)
    return (
      <button 
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    )
  
  // show Finish btn after last question
  if (index === numQuestions -1)
    return (
      <button 
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    )
}

export default NextButton