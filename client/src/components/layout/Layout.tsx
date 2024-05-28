import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function Layout() {

  return (
    <>
      <Sidebar />
      <section className="ms-80 pt-5 me-7">
        <Outlet />
      </section>
    </>
  )


}
