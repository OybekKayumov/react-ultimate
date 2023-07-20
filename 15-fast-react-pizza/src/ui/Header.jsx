import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

const Header = () => {
  return (
    <header className='bg-emerald-500 uppercase'>
      <Link to='/' className='tracking-widest'>Fast React Pizza Co.</Link>

      <SearchOrder />

      <UserName />
    </header>
  )
}

export default Header