// import DateCounter from "./components/DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],

  // states: loading, error, ready, active, finished
  status: 'loading',

  // display question, it needs to re-render the screen once it is updated
  index: 0,
  answer: null, // no answer
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived': 
      return {
        ...state, // all current state
        questions: action.payload, // set questions to the data we received
        status: 'ready'
      };
    case 'start':
      return {
        ...state,
        status: 'active'
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    case 'newAnswer': 
      // correct answer
      const question = state.questions.at(state.index);
    return {

      ...state,
      answer: action.payload,
      points: action.payload === question.correctOption 
        ? state.points + question.points  // if answer is correct add points
        : state.points,     // answer is wrong - no changes
    }
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  // reducer
  // const [state, dispatch] = useReducer(reducer, initialState);
  // state nested destructuring
  const [{questions, status, index, answer}, dispatch] = useReducer(reducer, initialState);

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

        {status === 'ready' && (
          <StartScreen 
            numQuestions={numQuestions} 
            dispatch={dispatch}
          />
        )}
        
        {status === 'active' && (
          <Question 
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />)}
      </Main>
    </div>
  );
}

export default App;
