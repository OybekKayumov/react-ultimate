// import DateCounter from "./components/DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";

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
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  // reducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  // nested destructuring
  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  // calculate derived state
  const numQuestions = questions.length;



  // fetch data from questions.json
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())  // response we need to convert to json
      // .then(data => console.log(': ', data))
      .then(data => dispatch({type: 'dataReceived', payload: data}))
      // .catch(err => console.error('Error'))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, [])

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
