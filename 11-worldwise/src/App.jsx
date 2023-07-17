// import { useEffect, useState } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
// TODO: LAZY LOADING
// const Homepage = lazy()

// dist/assets/index-0a325ce5.css   30.14 kB │ gzip:   5.05 kB
// dist/assets/index-ccb62b53.js   524.63 kB │ gzip: 148.61 kB

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import './App.css'

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
              <Route 
                index 
                // auto navigate to /app/cities, replace -> to go back
                element={<Navigate replace to='cities' />}
              />

              <Route 
                path='cities' 
                // element={<CityList cities={cities} isLoading={isLoading} />}
                element={<CityList/>}
              />

              <Route path='cities/:id' element={<City />} />
              <Route 
                path='countries' 
                // element={<CountryList cities={cities} isLoading={isLoading}/>}
                element={<CountryList/>}
              />
              <Route path='form' element={<Form />}/>
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
