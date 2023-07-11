import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import styles from './PageNav.module.css';

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        {/* <li> */}
          {/* class='active' -> NavLink*/}
          {/* <NavLink to='/'>Home</NavLink> 
        </li> */}
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav