import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"
import AppNav from "../components/AppNav"

const Home = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise</h1>

      {/* page reloaded */}
      {/* <a href="/pricing">Pricing</a> */}

      <Link to='/pricing'>Pricing</Link>

    </div>
  )
}

export default Home