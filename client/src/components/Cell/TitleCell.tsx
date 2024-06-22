
export default function TitleCell({ title }: { title: string }) {
  return (
    <td className="size-px whitespace-nowrap">
      <div className="ps-6 lg:ps-3 xl:ps-3 pe-6 py-3">
        <div className="flex items-center gap-x-3">
          <div className="grow">
            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{title} </span>
          </div>
        </div>
      </div>
    </td>
  )
}
