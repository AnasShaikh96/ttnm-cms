import { NavLink } from "react-router-dom"
import PlusIcon from "../../assets/icons/PlusIcon"
import LinkCell from "../../components/Cell/LinkCell"
import StatusCell from "../../components/Cell/StatusCell"
import TitleCell from "../../components/Cell/TitleCell"
import { useEffect, useState } from "react"
import useAxios from "../../hooks/axiosInstance"
import ArrowLeft from "../../assets/icons/ArrowLeft"
import { formatDate } from "../../helpers/formatDate"

export default function Posts() {

  const getPosts = useAxios()

  const postHeader = [
    {
      name: 'Title',
      field: 'title',
      cellEdit: function (cell: any) {
        return <TitleCell title={cell[this.field] ?? ''} />
      },
    },
    { name: 'Slug Name', field: 'slug_name' },
    {
      name: 'Status',
      field: 'status',
      cellEdit: function (cell: any) {
        return <StatusCell title={cell[this.field] ?? ''} />


      }
    },
    { name: 'Created At', field: 'createdAt' },
    { name: 'Last Updated', field: 'updatedAt' },
    {
      name: '',
      field: 'link',
      cellEdit: function (cell: any) {
        return <LinkCell cell={cell} />
      }
    },
  ]


  const [postData, setPostData] = useState<any>([])

  useEffect(() => {

    const fetchAllPosts = async () => {

      await getPosts.get('/blog/findAll', {
        params: {
          sort_by: 'title',
          sort_type: 'asc',
        }
      }).then((res) => {

        const rawData: any = res.data.data;

        const formattedData = rawData?.map(({ title, createdAt, updatedAt, ...rest }: { title: string, createdAt: Date, updatedAt: Date, rest: any }) => {

          return {
            title,
            slug_name: `/${title.replaceAll(" ", "-").toLowerCase()}`,
            createdAt: formatDate(createdAt),
            updatedAt: formatDate(updatedAt),
            ...rest
          }
        }) ?? []

        setPostData(formattedData)
      }).catch((err) => console.log(err))
    }

    fetchAllPosts()
  }, [])


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
                        <input type="text" className="border border-gray-500 rounded-md p-2" />
                        <NavLink to="/new-post" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          <PlusIcon />
                          Add post
                        </NavLink>
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
                              <i className="rotate-90 cursor-pointer bg-slate-500">
                                <ArrowLeft />
                              </i>
                              <i className="rotate-[270deg] cursor-pointer">
                                <ArrowLeft />
                              </i>

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
                        <span className="font-semibold text-gray-800 dark:text-neutral-200">{postData.length ?? 0}</span> results
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
