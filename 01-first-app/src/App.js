import { useEffect, useState } from "react";

export default function App() {
  // state
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    // console.log('data: ', data);
    console.log('data.slip.advice: ', data.slip.advice);
    setAdvice(data.slip.advice);
    setCount(e => e + 1)
  }

  // first time load page with advice
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>

      {/* state */}
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>      
      <Message count = {count}/>
    </div>
  )
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  )
}