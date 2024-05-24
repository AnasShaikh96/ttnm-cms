import Sidebar from "../../components/sidebar/Sidebar";

export default function Dashboard() {

  return (
    <main>
      <Sidebar />
      <section className="ms-80 pt-5">
        <h2 className="text-2xl font-semibold">Welcome User!</h2>
      </section>
    </main>
  )
}
