import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import ViewIcon from "../../assets/icons/ViewIcon";

export default function Table() {
  return (
    <div>
      <table className="table-auto">
        <thead className=" bg-zinc-300 text-left">
          <tr>
            <th className="font-semibold border border-gray-500 p-2 w-fit">Sr No.</th>
            <th className="font-semibold border border-gray-500 p-2">Title</th>
            <th className="font-semibold border border-gray-500 p-2">Published Date.</th>
            <th className="font-semibold border border-gray-500 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 p-2 w-fit">1</td>
            <td className="border border-gray-500 p-2">Some Article Title</td>
            <td className="border border-gray-500 p-2">24-05-2024</td>
            <td className="border border-gray-500 p-2">
              <div className="flex">
                <EditIcon />
                <ViewIcon />
                <DeleteIcon />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
