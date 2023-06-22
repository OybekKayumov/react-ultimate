import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {
  // const step = 1;
  const [step, setStep] = useState(1)

  function handlePrev() {
    setStep(step - 1)
  }

  function handleNext() {
    setStep(step + 1)
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <p className='message'>
        Step {step}: {messages[step -1]}
      </p>

      <div className="buttons">
        <button 
          style={{backgroundColor: '#7950f2', color: "#fff" }}
          onClick={handlePrev}
          // onMouseEnter={alert("123")}  //!
        >
          Previous
        </button>
        <button 
          style={{backgroundColor: '#7950f2', color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
