import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';

function App() {

  return (
    /* <div> */ 
    /* <h2>Hello Router!</h2> */
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    /* </div> */
  )
}

export default App
