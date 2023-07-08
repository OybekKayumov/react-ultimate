// import DateCounter from "./components/DateCounter";
import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  // fetch data from questions.json
  useEffect(function (params) {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())  // response we need to convert to json
      .then(data => console.log(': ', data))
      .catch(err => console.error('Error: '))
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
