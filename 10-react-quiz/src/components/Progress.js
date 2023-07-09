import React from 'react'

const Progress = ({ index, numQuestions }) => {
  return (
    <header className='progress'>
      <p>Question <strong>{index}</strong> / {numQuestions}</p>
    </header>
  )
}

export default Progress