import Button from "../../components/Button";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";

export default function NewPost() {
  return (
    <section>
      <Sidebar />
      <section className="ms-80 pt-5 me-7">
        <div className="flex justify-between mb-10">
          <h2 className="text-2xl font-semibold">What's in your mind today?</h2>
          <Button title="New Article" />
        </div>

        <div>
          <Table />
        </div>
      </section>
    </section>
  )
}
