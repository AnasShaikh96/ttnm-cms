import { NavLink } from "react-router-dom";

export default function LinkCell({ cell }: { cell: { _id: string } }) {

  return (
    <td className="size-px whitespace-nowrap">
      <div className="px-6 py-1.5">
        <NavLink to={`/edit-post/${cell._id}`} className="cursor-pointer inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" >
          Edit
        </NavLink>
      </div>
    </td>
  )
}
