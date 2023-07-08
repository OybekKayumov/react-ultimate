// import DateCounter from "./components/DateCounter";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
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
