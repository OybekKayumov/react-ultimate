import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';

function App() {

  return (
    /* <div> */ 
    /* <h2>Hello Router!</h2> */
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route index element={<Homepage />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='/login' element={<Login />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<CityList />}/>

            <Route path='cities' element={<CityList />}/>
            <Route path='countries' element={<p>Countries</p>}/>
            <Route path='form' element={<p>Form</p>}/>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> 
    /* </div> */
  )
}

export default App
