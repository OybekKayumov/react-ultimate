// import { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import './App.css';
import SpinnerFullPage from './components/SpinnerFullPage';

// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';
// TODO: LAZY LOADING
const Homepage = lazy(() => import(("./pages/Homepage")));
const Product = lazy(() => import(("./pages/Product")));
const Pricing = lazy(() => import(("./pages/Pricing")));
const Login = lazy(() => import(("./pages/Login")));
const AppLayout = lazy(() => import(("./pages/AppLayout")));
const PageNotFound = lazy(() => import(("./pages/PageNotFound")));

//! before lazy
// dist/assets/index-0a325ce5.css   30.14 kB │ gzip:   5.05 kB
// dist/assets/index-ccb62b53.js   524.63 kB │ gzip: 148.61 kB

//! after lazy
// dist/assets/Logo-515b84ce.css             0.03 kB │ gzip:   0.05 kB       
// dist/assets/Login-f39ef3ff.css            0.35 kB │ gzip:   0.22 kB       
// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB       
// dist/assets/Homepage-b9276e6f.css         0.51 kB │ gzip:   0.30 kB       
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB       
// dist/assets/AppLayout-a9e6818a.css        1.91 kB │ gzip:   0.70 kB       
// dist/assets/index-fc6ff447.css           26.47 kB │ gzip:   4.35 kB       
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB       
// dist/assets/PageNotFound-3f52861a.js      0.15 kB │ gzip:   0.15 kB       
// dist/assets/Logo-138c50f9.js              0.22 kB │ gzip:   0.20 kB       
// dist/assets/PageNav-c6bb250d.js           0.48 kB │ gzip:   0.26 kB       
// dist/assets/Pricing-febdcfad.js           0.65 kB │ gzip:   0.41 kB       
// dist/assets/Homepage-526a102b.js          0.67 kB │ gzip:   0.41 kB       
// dist/assets/Product-2254c95e.js           0.86 kB │ gzip:   0.49 kB       
// dist/assets/Login-2bf079f1.js             1.01 kB │ gzip:   0.53 kB       
// dist/assets/AppLayout-effb2deb.js       156.90 kB │ gzip:  46.11 kB       
// dist/assets/index-265312b0.js           366.13 kB │ gzip: 102.07 kB  

// const BASE_URL = `http://localhost:8000`;

function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true)
  //       const res = await fetch(`${BASE_URL}/cities`);
  //       const data = await res.json();
  //       setCities(data);
  //     } catch {
  //     alert("There was an error loading data...")
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   fetchCities();
  // }, [])

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* <Route path='/' element={<Homepage />} /> */}
              <Route index element={<Homepage />} />
              <Route path='product' element={<Product />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='login' element={<Login />} />

              <Route 
                path='app' 
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* auto navigate to /app/cities, replace -> to go back */}
                <Route index element={<Navigate replace to='cities' />} />

                {/* element={<CityList cities={cities} isLoading={isLoading} />} */}
                <Route path='cities' element={<CityList/>} />

                <Route path='cities/:id' element={<City />} />
                
                {/* element={<CountryList cities={cities} isLoading={isLoading}/>} */}
                <Route path='countries' element={<CountryList/>} />
                <Route path='form' element={<Form />}/>
              </Route>
              
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
