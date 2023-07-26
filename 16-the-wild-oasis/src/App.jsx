/* eslint-disable no-unused-vars */
import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyle";
// import Button from "./ui/Button";
// import Input from "./ui/Input";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryClient} from "@tanstack/react-query";

import GlobalStyles from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
 
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}/>

            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="bookings" element={<Bookings />}/>
            <Route path="cabins" element={<Cabins />}/>
            <Route path="Settings" element={<Users />}/>
            <Route path="Settings" element={<Users />}/>
            <Route path="settings" element={<Settings />}/>
            <Route path="account" element={<Account />}/>
          </Route>

          <Route path="login" element={<Login />}/>
          <Route path="*" element={<PageNotFound />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
