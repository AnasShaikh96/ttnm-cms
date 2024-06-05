import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { NavbarSimple } from "../navbar/Navbar";

export default function Layout() {

  return (
    <>
      <NavbarSimple />
      <Sidebar />
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <Outlet />
        </div>
      </div>
    </>
  )


}
