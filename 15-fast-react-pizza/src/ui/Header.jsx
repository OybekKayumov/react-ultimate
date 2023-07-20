import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

const Header = () => {
  return (
    <header className='bg-emerald-500'>
      <Link to='/'>Fast React Pizza Co.</Link>

      <SearchOrder />

      <p>Author</p>
    </header>
  )
}

export default Header