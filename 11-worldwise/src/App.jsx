import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
