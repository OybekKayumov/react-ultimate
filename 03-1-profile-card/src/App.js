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
  return (
    <div className="skill-list">
      <Skill skill='React' emoji='💪' color='blue'/>
      <Skill skill='HTML+CSS' emoji='❤' color='orangered'/>
      <Skill skill='JavaScript' emoji='👍' color='yellow'/>
      <Skill skill='Ruby' emoji='⭐' color='#00FF00'/>
      <Skill skill='Rails' emoji='✔' color='green'/>
      <Skill skill='SQL+NoSQL' emoji='☀' color='red'/>
      <Skill skill='AWS' emoji='⛅' color='#40E0D0'/>
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

export default App;
