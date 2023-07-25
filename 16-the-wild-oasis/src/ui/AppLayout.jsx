import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div>
      {/* <p>APP LAYOUT</p> */}

      <Header />
      <Sidebar />

      <main>
        {/* render other components inside layout */}
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout;
