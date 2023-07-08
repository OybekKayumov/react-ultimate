// import DateCounter from "./components/DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],

  // states: loading, error, ready, active, finished
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived': 
      return {
        ...state, // all current state
        questions: action.payload, // set questions to the data we received
        status: 'ready'
      }
      
    default:
      break;
  }
}

function App() {
  // reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch data from questions.json
  useEffect(function (params) {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())  // response we need to convert to json
      // .then(data => console.log(': ', data))
      .then(data => dispatch({type: 'dataReceived', payload: data}))
      .catch(err => console.error('Error'))
  }, [])

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
