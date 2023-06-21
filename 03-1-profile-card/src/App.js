function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />

        <Skillist />
      </div>
    </div>
  );
}

function Avatar () {
  return (
    <img src="favicon.ico" className="avatar" alt="my-photo" />
  )
}

function Intro() {
  return (
    <div>
      <h1>Oybek Kayumov</h1>
      <p>
        Full-stack web developer at Microverse. When not coding or preparing a project, I like to walk, to cook (and eat), or to
        just enjoy reading books.</p>
    </div>

  )
}

function Skillist() {
  
}

function Skill() {
  
}

export default App;
