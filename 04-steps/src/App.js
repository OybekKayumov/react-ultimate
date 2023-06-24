import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
  // const step = 1;
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true);
  
  // const [test, setTest] = useState({ name: 'John' });

  function handlePrev() {
    // if (step > 1) setStep(step - 1)
    if (step > 1) setStep((curStep) => curStep - 1)
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1)
    if (step < 3) setStep((curStep) => curStep + 1)
    // if (step < 3) setStep((curStep) => curStep + 1) // +2

    // BAD PRACTICE
    // step = step + 1;  //! 
    // test.name = 'Joe'
    // setTest({ name: 'Joe' });
  }

  return (
    <div>
      <button 
        className='close'
        // onClick={() => setIsOpen(!isOpen)}
        onClick={() => setIsOpen((is) => !is)}
      >
        &times;
      </button>

      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
         
          {/*   
          <p className='message'>
            <h3>Step {step}</h3>: {messages[step -1]} */}
            {/* {test.name} */}
          {/* </p> */}
          <StepMessage step={step}>
            {messages[step -1]}
          </StepMessage>

          <div className="buttons">
            <Button 
              bgColor='#7950f2' 
              textColor="#fff"
              // text='Prev'
              // emoji='◀'
              onClick={handlePrev}
            >
              <span>◀</span> Prev
            </Button>

            <Button 
              bgColor='#7950f2' 
              textColor="#fff"
              // text='Next'
              // emoji='▶'
              onClick={handleNext}
            >
              Next <span>▶</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {

  return (
    <div className='message'>
      <h3>Step {step}: </h3>
      {children}
    </div>
  )
}

// function Button({ textColor, bgColor, onClick, text, emoji }) {
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button 
      style={{backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {/* <span>{emoji}</span> {text} */}
      {children}
    </button>
  )
}

// export default App;
