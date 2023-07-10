import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

const Home = () => {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>

      {/* page reloaded */}
      {/* <a href="/pricing">Pricing</a> */}

      <Link to='/pricing'>Pricing</Link>

    </div>
  )
}

export default Home