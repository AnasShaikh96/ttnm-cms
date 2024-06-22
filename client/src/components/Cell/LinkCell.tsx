
export default function LinkCell({ link }: { link: string }) {
  return (
    <td className="size-px whitespace-nowrap">
      <div className="px-6 py-1.5">
        <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href={link}>
          Edit
        </a>
      </div>
    </td>
  )
}
