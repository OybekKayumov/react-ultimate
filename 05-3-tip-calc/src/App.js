import { useState } from 'react';

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      
      <SelectPercentage 
        percentage={percentage1}
        onSelect={setPercentage1}
      > 
        How did you like the service?
      </SelectPercentage>
      
      <SelectPercentage
        percentage={percentage2}
        onSelect={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>
      
      <Output bill={bill} />
      <Reset />
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the bill?</label>
      <input 
        type="text" 
        placeholder='Bill value' 
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label htmlFor="">{children}</label>

      <select name="" id="">
        <option value="0">Dissatisfied (0%)</option>
        <option value="0">It was OK (5%)</option>
        <option value="0">It was good (10%)</option>
        <option value="0">Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill }) {
  return (
    <h3>You pay X (${bill} + B tip)</h3>
  )
}

function Reset() {
  return (
    <button>Reset</button>
  )
}

export default App;
