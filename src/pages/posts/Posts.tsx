import Button from "../../components/Button";
import Table from "../../components/table/Table";

export default function Posts() {
  return (
    <section>
      <div className="flex justify-between mb-10">
        <h2 className="text-2xl font-semibold">What's in your mind today?</h2>
        <Button title="New Article" />
      </div>

      <div>
        <Table />
      </div>
    </section>
  )
}
