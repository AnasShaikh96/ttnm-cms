import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { NavbarSimple } from "../navbar/Navbar";

export default function Layout() {

  return (
    <>
      {/* <NavbarSimple /> */}
      <Sidebar />
      <section className="ms-[18.5rem] pt-5 pe-5 overflow-auto h-[calc(100%-62px)]">
        <Outlet />
      </section>
    </>
  )


}
