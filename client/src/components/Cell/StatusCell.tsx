import CheckIcon from '../../assets/icons/CheckIcon'

export default function StatusCell({ title }: { title: string }) {
  return (
    <td className="size-px whitespace-nowrap">
      <div className="px-3 py-3">
        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
          <CheckIcon />
          {title}
        </span>
      </div>
    </td>
  )
}
