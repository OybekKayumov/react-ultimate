/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(': ', navigation);
  const isLoading = navigation.state === "loading";


  return (
    <div className='grid h-screen bg-sky-400 grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
      
      <Header />

      <div className="overflow-scroll">
        <main className='max-w-3xl bg-fuchsia-300 mx-auto'>
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  )
}

export default AppLayout