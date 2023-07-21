import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(': ', navigation);
  const isLoading = navigation.state === "loading";


  return (
    <div className='grid h-[600px] bg-red-400 grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
      
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  )
}

export default AppLayout