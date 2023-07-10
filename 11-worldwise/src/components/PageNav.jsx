import { NavLink } from 'react-router-dom'

const PageNav = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* class='active' -> NavLink*/}
          <NavLink to='/'>Home</NavLink> 
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav