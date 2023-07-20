import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(': ', navigation);
  
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default AppLayout