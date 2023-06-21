
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Rails",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Ruby",
    level: "beginner",
    color: "#FF3B00"
  }
];

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

      {/* <Skill skill='React' emoji='💪' color='blue'/>
      <Skill skill='HTML+CSS' emoji='❤' color='orangered'/>
      <Skill skill='JavaScript' emoji='👍' color='yellow'/>
      <Skill skill='Ruby' emoji='⭐' color='#00FF00'/>
      <Skill skill='Rails' emoji='✔' color='green'/>
      <Skill skill='SQL+NoSQL' emoji='☀' color='red'/>
      <Skill skill='AWS' emoji='⛅' color='#40E0D0'/> */}

      {skills.map(skill => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  )
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{backgroundColor: color}}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && "👶"}
        {level === 'intermediate' && "👍"}
        {level === 'advanced' && "💪"}
      </span>
    </div>
  )
}

export default App;
