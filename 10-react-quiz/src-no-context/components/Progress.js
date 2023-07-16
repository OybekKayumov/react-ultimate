import React from 'react'

const Progress = ({ index, numQuestions, points,maxPossiblePoints, answer }) => {
  return (
    <header className='progress'>
      <progress 
        max={numQuestions}
        // progress_bar+1 after press answer, not after press Next_btn
        value={index + Number( answer !== null)} 
      />

      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>

      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}

export default Progress