import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout >
      {/* <p>APP LAYOUT</p> */}

      <Header />
      <Sidebar />

      <Main>
        {/* render other components inside layout */}
        <Outlet />
      </Main>
    </StyledAppLayout>
  )
}

export default AppLayout;
