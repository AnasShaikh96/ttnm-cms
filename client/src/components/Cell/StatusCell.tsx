import CheckIcon from '../../assets/icons/CheckIcon'

export default function StatusCell({ title }: { title: string }) {

  // console.log(title )


  let cellStyle = 'bg-teal-100 text-teal-800';

  if (title === 'Inactive') {
    cellStyle = 'bg-yellow-100 text-yellow-700'
  }

  return (
    <td className="size-px whitespace-nowrap">
      <div className="px-3 py-3">
        <span className={`${cellStyle} py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium  rounded-full dark:bg-teal-500/10 dark:text-teal-500`}>
          <CheckIcon />
          {title}
        </span>
      </div>
    </td>
  )
}
