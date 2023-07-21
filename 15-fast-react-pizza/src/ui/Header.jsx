import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

const Header = () => {
  return (
    // px - left & right, py - top & bottom
    <header className='flex items-center justify-around bg-emerald-500 px-4 py-3 uppercase border-b-2 border-stone-500 sm:px-6'>
      <Link to='/' className='tracking-widest'>Fast React Pizza Co.</Link>

      <SearchOrder />

      <UserName />
    </header>
  )
}

export default Header