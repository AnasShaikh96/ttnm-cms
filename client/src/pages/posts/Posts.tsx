export default function Posts() {

  const postHeader = [
    {
      name: 'Title',
      field: 'title',
      cellEdit: function (cell: any) {
        return (<td className="size-px whitespace-nowrap">
          <div className="ps-6 lg:ps-3 xl:ps-3 pe-6 py-3">
            <div className="flex items-center gap-x-3">
              <div className="grow">
                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">{cell[this.field] ?? ''} </span>
              </div>
            </div>
          </div>
        </td>)
      },
    },
    { name: 'Slug Name', field: 'slug_name' },
    {
      name: 'Status',
      field: 'status',
      cellEdit: function (cell: any) {
        return (
          <td className="size-px whitespace-nowrap">
            <div className="px-3 py-3">
              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                {cell[this.field] ?? ''}
              </span>
            </div>
          </td>
        )
      }
    },
    { name: 'Created At', field: 'created_at' },
    { name: 'Last Updated', field: 'last_updated' },
    {
      name: '',
      field: 'link',
      cellEdit: function (cell: any) {
        return (
          <td className="size-px whitespace-nowrap">
            <div className="px-6 py-1.5">
              <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href={cell[this.field]}>
                Edit
              </a>
            </div>
          </td>
        )

      }
    },
  ]

  const postData = [
    {
      id: 'oiasd-oihasdi-poaisjd',
      title: 'A day in a life',
      slug_name: '/day-in-life',
      status: 'active',
      created_at: '12-12-2024',
      last_updated: '12-12-2023',
    },
    {
      id: 'oiasd-oihasdi-poajd',
      title: 'Two day in a life',
      slug_name: '/two-day',
      status: 'active',
      created_at: '12-12-2024',
      last_updated: '12-12-2023',
    },
  ]


  return (
    <section>

      <div>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-4 mx-auto">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                        Posts
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Add posts, edit and more.
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href="/">
                          View all
                        </a>

                        <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                          Add post
                        </a>
                      </div>
                    </div>
                  </div>

                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-800">
                      <tr>

                        {postHeader.map((item) => (
                          <th scope="col" className="ps-6 lg:ps-3 xl:px-3  py-3 text-start" key={item.name}>
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                {item.name}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

                      {postData.map((cell: any) => {

                        const getData = postHeader.map((row: any) => {

                          if (row.cellEdit !== undefined) {
                            return row.cellEdit(cell)
                          }
                          else {

                            return (
                              <td className="size-px whitespace-nowrap">
                                <div className="px-3 py-3">
                                  <span className="block text-sm text-gray-500 dark:text-neutral-500">{cell[row.field]}</span>
                                </div>
                              </td>
                            )

                          }
                        })
                        return <tr key={cell.id}>{getData}</tr>
                      })}
                    </tbody>
                  </table>

                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">12</span> results
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                          Prev
                        </button>

                        <button type="button" className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                          Next
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
