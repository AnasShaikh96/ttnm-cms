import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import ViewIcon from "../../assets/icons/ViewIcon";

interface TableProps {
  tableHeaders: { name: string, field: string }[],
  tableData: { [key: string]: string | number | boolean }[]

}


export default function Table({ tableHeaders, tableData }: TableProps) {
  return (
    <div>
      <table className="table-auto">
        <thead className=" bg-zinc-300 text-left">
          <tr>
            {tableHeaders.map((item) => (
              <th key={item.field} className="font-semibold border border-gray-500 p-2">
                {item.name}
              </th>
            ))}
            <th className="font-semibold border border-gray-500 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>

          {tableData.map((tRow: { [key: string]: any }, index: number) => (
            <tr key={tRow.id}>
              {tableHeaders.map((tHeader) => (
                <td className="border border-gray-500 p-2">{tRow[tHeader.field]}</td>
              ))}
              <td className="border border-gray-500 p-2">
                <div>
                  <Link to={'/edit-post/1'}>
                    <EditIcon classProps={'size-4 inline-block me-2 hover:text-yellow-500 transition-all cursor-pointer'} />
                  </Link>

                  <Link to={'/view'}>
                    <ViewIcon classProps={'size-4 inline-block me-2 hover:text-blue-500 transition-all cursor-pointer'} />
                  </Link>

                  <Link to={'/delete'}>
                    <DeleteIcon classProps={'size-4 inline-block me-2 hover:text-red-500 transition-all cursor-pointer'} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
