import './App.css';

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did your friend like the service?</SelectPercentage>
      <Output />
      <Reset />
    </div>
  )
}

function BillInput() {
  return (
    <div>
      <label htmlFor="">How much was the bill?</label>
      <input type="text" placeholder='Bill value' />
    </div>
  )
}

function SelectPercentage({ children }) {
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

function Output() {
  return (
    <h3>You pay X (A + B tip)</h3>
  )
}

function Reset() {
  return (
    <button>Reset</button>
  )
}

export default App;
